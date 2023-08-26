import React, { useEffect, useState } from "react";

import { Input } from "../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";

import style from "./startUpOnboarding.module.scss";
import globalStyle from "../../../global.module.scss";
import { investmentType } from "../../../util";
import Button, { BtnRect } from "../../../Components/Button/Button";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";
import YesIcon from "../../../Images/icon/yes.png";
import NoIcon from "../../../Images/icon/no.png";
import { useNavigate } from "react-router-dom";

const initialOnBoarding = {
  projectName: "",
  projectOwner: "",
  category: "",
  description: "",
  funding: null,
  fundsAvailabeltillNow: "",
  fundsrequired: "",
  timeAvailable: "",
  minimumFunding: "",
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
                onClick={(e) =>
                  setOnBoardingForm({
                    ...onBoardingForm,
                    category: e.target.value,
                  })
                }
                value={onBoardingForm.category}
                firstValue="Category"
                optionData={investmentType}
              />
            </div>
          ) : onBoardingSteps == 2 ? (
            <div className={style.step2}>
              <TextArea
                className={style.stepTextArea}
                value={onBoardingForm.description}
                onChange={(e) =>
                  setOnBoardingForm({
                    ...onBoardingForm,
                    description: e.target.value,
                  })
                }
                placeHolder="Description"
              />
            </div>
          ) : (
            <div className={style.step3}>
              {onBoardingForm.funding === null ? (
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
                        setOnBoardingForm({ ...onBoardingForm, funding: true })
                      }
                      btnIcon={YesIcon}
                      btnWithIcon={true}
                    />
                    <BtnRect
                      text="No"
                      className={style.answerbtn}
                      onClick={() =>
                        setOnBoardingForm({ ...onBoardingForm, funding: true })
                      }
                      btnIcon={NoIcon}
                      btnWithIcon={true}
                    />
                  </div>
                </div>
              ) : (
                <div className={style.fundingAmountStep}>
                  <Input
                    value={onBoardingForm.fundsAvailabeltillNow}
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        fundsAvailabeltillNow: e.target.value,
                      })
                    }
                    className={style.startUpInput}
                    placeHolder="Funds availabel till now:"
                  />
                  <Input
                    value={onBoardingForm.fundsrequired}
                    className={style.startUpInput}
                    placeHolder="Funds required:"
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        fundsrequired: e.target.value,
                      })
                    }
                  />
                  <Input
                    value={onBoardingForm.timeAvailable}
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        timeAvailable: e.target.value,
                      })
                    }
                    className={style.startUpInput}
                    placeHolder="Time available:"
                  />
                  <Input
                    value={onBoardingForm.minimumFunding}
                    className={style.startUpInput}
                    placeHolder="Minimum Funding:"
                    onChange={(e) =>
                      setOnBoardingForm({
                        ...onBoardingForm,
                        minimumFunding: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>
          )}
          <Button
            disable={onBoardingSteps > 2 && onBoardingForm.funding === null}
            text={onBoardingSteps > 2 ? "Submit" : "Next"}
            className={`${onBoardingSteps === 3 && style.addLeftMargin} ${
              style.nextBtn
            }`}
            onClick={() => {
              if (onBoardingSteps === 3) {
                navigate("/startUpDetialsPage");
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
