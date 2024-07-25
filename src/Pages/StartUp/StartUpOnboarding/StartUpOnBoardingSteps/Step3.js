import React from "react";

import style from "../startUpOnboarding.module.scss";
import globalStyle from "../../../../global.module.scss";
import { BtnRect } from "../../../../Components/Button/Button";
import YesIcon from "../../../../Images/icon/yes.png";
import NoIcon from "../../../../Images/icon/no.png";
import { Input } from "../../../../Components/FormElements/Input/Input";

function Step3({
  onBoardingForm,
  setOnBoardingForm,
  submitWithoutFunding,
  updateStep,
}) {
  return (
    <div className={style.step3}>
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
            onClick={() => {
              setOnBoardingForm({
                ...onBoardingForm,
                prjctFndReqdStatus: true,
              });
              updateStep();
            }}
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
    </div>
  );
}

export default Step3;
