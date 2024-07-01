import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import { Input } from "../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { investmentType } from "../../../util";
import Button, { BtnRect } from "../../../Components/Button/Button";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";
import YesIcon from "../../../Images/icon/yes.png";
import NoIcon from "../../../Images/icon/no.png";

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
    // https://seedboat.qortechno.com/startup/createstartupproject
    Axios.post(`${Axios.defaults.baseURL}/startup/createstartupproject`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
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

  console.log(onBoardingSteps);

  return (
    <div className={style.startupContainer}>
      <div className={style.twoColumnContainer}>
        <div className={style.labelContainer}>
          <div className={`${style.pageHeading} ${globalStyle.headingPoppins}`}>
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
          {onBoardingSteps == 1 ? (
            <div className={style.step1}>
              <Input
                value={onBoardingForm.projectName}
                onChange={(e) =>
                  setOnBoardingForm({
                    ...onBoardingForm,
                    projectName: e.target.value,
                  })
                }
                className={style.startUpInput}
                placeHolder="Project Name"
              />
              <Input
                value={onBoardingForm.projectOwner}
                className={style.startUpInput}
                placeHolder="Project Owner"
                onChange={(e) =>
                  setOnBoardingForm({
                    ...onBoardingForm,
                    projectOwner: e.target.value,
                  })
                }
              />
              <SelectDropdown
                className={`${style.startUpInput} ${style.dropdown}`}
                onChange={(e) =>
                  setOnBoardingForm({
                    ...onBoardingForm,
                    projectCategory: e.target.value,
                  })
                }
                value={onBoardingForm.projectCategory}
                firstValue="Category"
                optionData={investmentType}
              />
            </div>
          ) : onBoardingSteps == 2 ? (
            <div className={style.step2}>
              <TextArea
                className={style.stepTextArea}
                value={onBoardingForm.projectDescription}
                onChange={(e) =>
                  setOnBoardingForm({
                    ...onBoardingForm,
                    projectDescription: e.target.value,
                  })
                }
                placeHolder="Description"
              />
            </div>
          ) : (
            <div className={style.step3}>
              {onBoardingForm.prjctFndReqdStatus === null ? (
                <div className={style.fundingContainer}>
                  <div
                    className={`${style.fundingHeading} ${globalStyle.headingPoppins}`}
                  >
                    Are you here for funding ?
                  </div>
                  <div className={style.btnContainer}>
                    <BtnRect
                      text="Yes"
                      className={style.answerbtn}
                      onClick={() =>
                        setOnBoardingForm({
                          ...onBoardingForm,
                          prjctFndReqdStatus: true,
                        })
                      }
                      btnIcon={NoIcon}
                      btnWithIcon={true}
                    />
                    <BtnRect
                      text="No"
                      className={style.answerbtn}
                      onClick={() => submitWithoutFunding(false)}
                      btnIcon={YesIcon}
                      btnWithIcon={true}
                    />
                  </div>
                </div>
              ) : onBoardingForm.prjctFndReqdStatus === true ? (
                <div className={style.fundingAmountStep}>
                  <Input
                    type="number"
                    value={onBoardingForm.prjctFndAvailableTime}
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        prjctFndAvailableTime: parseInt(e.target.value),
                      })
                    }
                    className={style.startUpInput}
                    placeHolder="Funds availabel till now:"
                  />
                  <Input
                    type="number"
                    value={onBoardingForm.prjctFndReqrd}
                    className={style.startUpInput}
                    placeHolder="Funds required:"
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        prjctFndReqrd: parseInt(e.target.value),
                      })
                    }
                  />
                  <Input
                    value={onBoardingForm.prjctFundTime}
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        prjctFundTime: e.target.value,
                      })
                    }
                    className={style.startUpInput}
                    placeHolder="Time available:"
                  />
                  <Input
                    type="number"
                    value={onBoardingForm.projectFndMinimum}
                    className={style.startUpInput}
                    placeHolder="Minimum Funding:"
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        projectFndMinimum: e.target.value,
                      })
                    }
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
          <Button
            disable={onBoardingSteps > 2 && onBoardingForm.funding === null}
            text={
              onBoardingSteps > 2 || onBoardingForm.prjctFndReqdStatus === false
                ? "Submit"
                : "Next"
            }
            className={`${onBoardingSteps === 3 && style.addLeftMargin} ${
              style.nextBtn
            }`}
            onClick={() => {
              if (
                onBoardingSteps === 3 ||
                onBoardingForm.prjctFndReqdStatus === false
              ) {
                console.log(onBoardingForm, " <>?");
                callApi(onBoardingForm);
              } else {
                sessionStorage.setItem(
                  "startUpStep",
                  parseInt(onBoardingSteps) + 1
                );
                setOnBoardingSteps((state) => state + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StartUpOnboarding;
