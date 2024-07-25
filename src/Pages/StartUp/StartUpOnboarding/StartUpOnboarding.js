import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import Button from "../../../Components/Button/Button";
import PageLoader from "../../../Components/PageLoader/PageLoader";
import Step1 from "./StartUpOnBoardingSteps/Step1";
import Step2 from "./StartUpOnBoardingSteps/Step2";
import Step3 from "./StartUpOnBoardingSteps/Step3";
import Step4 from "./StartUpOnBoardingSteps/Step4";

import style from "./startUpOnboarding.module.scss";
import globalStyle from "../../../global.module.scss";

const initialOnBoarding = {
  projectName: "",
  projectOwner: "",
  projectCategory: "",
  projectDescription: "",
  prjctFndReqdStatus: null,
  prjctFndAvailableTime: "",
  prjctFndReqrd: "",
  prjctFundTime: "",
  projectFndMinimum: "",
};

function StartUpOnboarding() {
  const [onBoardingSteps, setOnBoardingSteps] = useState(null);
  const [onBoardingForm, setOnBoardingForm] = useState({
    ...initialOnBoarding,
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formError2, setFormError2] = useState(false);
  const [apiStatus, setApiStatus] = useState("");
  const [projectRelated, setprojectRelated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!onBoardingSteps) {
      const sessionData = sessionStorage.getItem("startUpStep");
      setOnBoardingSteps(
        !sessionData || sessionData === "" ? 1 : parseInt(sessionData)
      );
    }
    return () => {
      sessionStorage.removeItem("startUpStep");
    };
  }, []);

  const callApi = (data) => {
    setLoading(true);
    data.userid = JSON.parse(sessionStorage.getItem("loginData")).user.userid;
    Axios.post(`${Axios.defaults.baseURL}/startup/createstartupproject`, data)
      .then((res) => {
        setLoading(false);
        setApiStatus("Start up added Successfully!");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const submitWithoutFunding = (flag) => {
    setOnBoardingForm({
      ...onBoardingForm,
      prjctFndReqdStatus: false,
    });
    onBoardingForm.prjctFndReqdStatus = false;
    callApi(onBoardingForm);
  };

  const onSubmitClick = () => {
    if (
      !(
        onBoardingForm.prjctFndAvailableTime === "" ||
        onBoardingForm.prjctFndReqrd === "" ||
        onBoardingForm.prjctFundTime === "" ||
        onBoardingForm.projectFndMinimum === ""
      ) &&
      onBoardingSteps === 4
    ) {
      console.log(onBoardingForm, " <>?");
      callApi(onBoardingForm);
    }
    if (
      onBoardingSteps === 1 &&
      (onBoardingForm.projectName === "" ||
        onBoardingForm.projectOwner === "" ||
        onBoardingForm.projectCategory === "")
    ) {
      setFormError(true);
    } else if (
      onBoardingSteps === 2 &&
      onBoardingForm.projectDescription === ""
    ) {
      setFormError2(true);
    } else if (
      onBoardingForm.prjctFndReqdStatus &&
      onBoardingSteps === 4 &&
      (onBoardingForm.prjctFndAvailableTime === "" ||
        onBoardingForm.prjctFndReqrd === "" ||
        onBoardingForm.prjctFundTime === "" ||
        onBoardingForm.projectFndMinimum === "")
    ) {
      setprojectRelated(true);
    } else {
      sessionStorage.setItem("startUpStep", parseInt(onBoardingSteps) + 1);
      setOnBoardingSteps((state) => state + 1);
    }
  };

  console.log(onBoardingSteps, " <>?");

  return (
    <div className={style.startupContainer}>
      {loading ? (
        <PageLoader />
      ) : (
        <div className={style.twoColumnContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.pageHeading} ${globalStyle.headingPoppins}`}
            >
              {onBoardingSteps === 1
                ? "First, let’s get you set up."
                : onBoardingSteps === 2
                ? "Description for your project."
                : "Set a target for your project."}
            </div>
            <div
              className={`${style.pageSubHeading} ${globalStyle.subHeadingPoppins}`}
            >
              {onBoardingSteps === 1
                ? "Select a primary category and subcategory for your new project."
                : onBoardingSteps === 2
                ? `Etiam ex ex, vehicula vitae est et, mattis molestie
              lorem. Sed sagittis ex ut leo malesuada,
              tincidunt pharetra metus imperdiet.`
                : `Etiam ex ex, vehicula vitae est et, mattis molestie
              lorem. Sed sagittis ex ut leo malesuada,
              tincidunt pharetra metus imperdiet.`}
            </div>
            <ul className={style.stepContainer}>
              <li
                className={`${style.stepItem} ${globalStyle.headingPoppins} ${
                  onBoardingSteps > 1 && style.complete
                } ${onBoardingSteps == 1 && style.active}`}
              >
                1
              </li>
              <li className={style.listDash}></li>
              <li
                className={`${style.stepItem} ${
                  onBoardingSteps > 2 && style.complete
                } ${onBoardingSteps == 2 && style.active}`}
              >
                2
              </li>
              <li className={style.listDash}></li>
              <li
                className={`${style.stepItem} ${
                  onBoardingSteps > 3 && style.complete
                } ${onBoardingSteps == 3 && style.active}`}
              >
                3
              </li>
            </ul>
          </div>
          <div className={style.formContainer}>
            {apiStatus !== "" && (
              <div className={style.apiStatus}>{apiStatus}</div>
            )}
            {onBoardingSteps == 1 ? (
              <Step1
                formError={formError}
                onBoardingForm={onBoardingForm}
                setOnBoardingForm={setOnBoardingForm}
              />
            ) : onBoardingSteps == 2 ? (
              <Step2
                formError={formError2}
                onBoardingForm={onBoardingForm}
                setOnBoardingForm={setOnBoardingForm}
              />
            ) : onBoardingSteps == 3 ? (
              <Step3
                onBoardingForm={onBoardingForm}
                setOnBoardingForm={setOnBoardingForm}
                submitWithoutFunding={submitWithoutFunding}
                updateStep={() => setOnBoardingSteps(4)}
              />
            ) : (
              <Step4
                formError={projectRelated}
                onBoardingForm={onBoardingForm}
                setOnBoardingForm={setOnBoardingForm}
              />
            )}
            {onBoardingSteps !== 3 && (
              <>
                <Button
                  disable={
                    onBoardingSteps > 2 && onBoardingForm.funding === null
                  }
                  text={
                    onBoardingSteps > 2 ||
                    onBoardingForm.prjctFndReqdStatus === false
                      ? "Submit"
                      : "Next"
                  }
                  className={`${onBoardingSteps === 3 && style.addLeftMargin} ${
                    style.nextBtn
                  }`}
                  onClick={() => onSubmitClick()}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default StartUpOnboarding;
