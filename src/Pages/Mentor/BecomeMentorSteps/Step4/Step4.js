import React, { useState } from "react";

import style from "./step4.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";
import TextArea from "../../../../Components/FormElements/TextArea/TextArea";
import { Input } from "../../../../Components/FormElements/Input/Input";
import RadioButton from "../../../../Components/FormElements/RadioButton/RadioButton";

const initialStepData = {
  story: "",
  language: "",
  prefferedCompensation: "",
};

function Step4() {
  const [stepData, setStepData] = useState({ ...initialStepData });
  return (
    <div className={style.step4Container}>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Select primary expertise
        </div>
        <TextArea
          className={`${commonStyle.stepInput} ${style.storyInput}`}
          value={stepData.story}
          onChange={(e) => setStepData({ ...stepData, story: e.target.value })}
          placeHolder="Tell us more about yourself, your goals and what you love!"
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Languages you can speak
        </div>
        <Input
          fullWidth={true}
          className={`${commonStyle.stepInput} ${style.languageInput}`}
          value={stepData.language}
          onChange={(e) =>
            setStepData({ ...stepData, language: e.target.value })
          }
          placeHolder="Eg: English, French"
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Preffered Compensation
        </div>
        <div className={style.radioContainer}>
          <RadioButton
            radioContainerClass={style.radioContainer}
            name="Equity"
            checked={stepData.prefferedCompensation === "Equity"}
            value="Equity"
            onChange={(e) =>
              setStepData({ ...stepData, prefferedCompensation: "Equity" })
            }
          />
          <RadioButton
            radioContainerClass={style.radioContainer}
            name="Salary"
            checked={stepData.prefferedCompensation === "Salary"}
            value="Salary"
            onChange={(e) =>
              setStepData({ ...stepData, prefferedCompensation: "Salary" })
            }
          />
          <RadioButton
            radioContainerClass={style.radioContainer}
            name="Equity + Salary "
            checked={stepData.prefferedCompensation === "Equity + Salary "}
            value="Equity + Salary "
            onChange={(e) =>
              setStepData({
                ...stepData,
                prefferedCompensation: "Equity + Salary ",
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Step4;
