import React, { useEffect, useState } from "react";

import Step from "../../../Components/Steps/Step";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import WhiteArraow from "../../../Images/icon/whiteArrow.png";
import verticalImage from "../../../Images/verticalImage.png";

import style from "./becomeMentorsteps.module.scss";
import globalStyle from "../../../global.module.scss";
import { useNavigate } from "react-router-dom";

function BecomeMentorSteps() {
  const [steps, setSteps] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!steps) {
      const sessionData = JSON.parse(
        sessionStorage.getItem("tabAndRoleMentor")
      );
      setSteps(!sessionData ? 1 : sessionData);
    }
    return () => {
      console.log("called and removed");
    };
  }, []);

  const getPageByStep = () => {
    switch (true) {
      case steps === 1:
        return <Step1 />;
      case steps === 2:
        return <Step2 />;
      case steps === 3:
        return <Step3 />;
      case steps === 4:
        return <Step4 />;
      default:
        return <Step5 />;
    }
  };

  const changeTab = () => {
    if (steps === 5) {
      sessionStorage.removeItem("tabAndRoleMentor");
      navigate("/mentorList");
    } else {
      sessionStorage.setItem("tabAndRoleMentor", steps + 1);
      setSteps((steps) => steps + 1);
    }
  };

  return (
    <div className={style.becomeMentorSteps}>
      <div className={style.leftContainer}>
        <div className={style.stepContainer}>
          <Step page={steps} totalSteps={[1, 2, 3, 4, 5]} />
        </div>
        <div className={`${style.stepHeading} ${globalStyle.headingPoppins}`}>
          {steps === 1 ? (
            <>
              Hello,! What’s your
              <br /> origin story?
            </>
          ) : steps === 2 ? (
            <>
              Hello,
              <br />
              What’s your origin story?
            </>
          ) : steps === 3 ? (
            <>
              Great! What’s your
              <br />
              super power?
            </>
          ) : steps === 4 ? (
            <>Almost there! </>
          ) : (
            <>You are all complete!</>
          )}
        </div>
        <div className={style.step}>{getPageByStep()}</div>
        <button
          className={`${style.nextBtn} ${globalStyle.headingPoppins}`}
          onClick={() => changeTab()}
        >
          {steps === 1
            ? "Create Profile"
            : steps === 2 || steps === 3 || steps === 4
            ? "Next"
            : "Start Mentoring"}
          {steps === 5 || steps === 1 ? (
            <></>
          ) : (
            <img src={WhiteArraow} alt="" className={style.btnIcon} />
          )}
        </button>
      </div>
      <div className={style.rightContainer}>
        <img src={verticalImage} alt="" className={style.verticalImg} />
        <div className={style.rightMainImage}>
          <div className={style.textContainer}>
            <div className={`${style.mainText} ${globalStyle.headingPoppins}`}>
              12,797+ mentors
            </div>
            <div
              className={`${style.subText} ${globalStyle.subHeadingPoppins}`}
            >
              Vivamus lacinia faucibus aliquam. Donec sodales rhoncus nisi, eget
              ullamcorper sem convallis id. Quisque eleifend augue non lectus
              malesuada posuere.
            </div>
            <div className={style.dashContainer}>
              <div className={`${style.dash} ${style.active}`} />
              <div className={style.dash} />
              <div className={style.dash} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeMentorSteps;
