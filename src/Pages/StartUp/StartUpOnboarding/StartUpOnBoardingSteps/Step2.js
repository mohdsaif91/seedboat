import React from "react";

import TextArea from "../../../../Components/FormElements/TextArea/TextArea";

import style from "../startUpOnboarding.module.scss";
import globalStyle from "../../../../global.module.scss";

function Step2({ formError = false, onBoardingForm, setOnBoardingForm }) {
  return (
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
      {formError && onBoardingForm.projectDescription === "" && (
        <div className={globalStyle.validationErrorText}>
          Project Description is required
        </div>
      )}
    </div>
  );
}

export default Step2;
