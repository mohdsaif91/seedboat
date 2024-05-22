import React, { useState, useImperativeHandle, forwardRef } from "react";

import style from "./step4.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";
import TextArea from "../../../../Components/FormElements/TextArea/TextArea";
import { Input } from "../../../../Components/FormElements/Input/Input";
import RadioButton from "../../../../Components/FormElements/RadioButton/RadioButton";

const initialStepData = {
  user_message: "",
  user_language: "",
  required_compensation: "",
};

const Step4 = forwardRef((props, ref) => {
  const [stepData, setStepData] = useState({ ...initialStepData });
  
  const updateStepData = (pKey, pValue) => {
    setStepData({...stepData, [pKey]: pValue})
  }

  useImperativeHandle(ref, (e)=>({
    getStepData() {
      sessionStorage.setItem("step4data", JSON.stringify(stepData));
      return stepData;
    }
  }))
  
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
          onChange={(e) => 
            updateStepData('user_message', e.target.value)
            // setStepData({ ...stepData, story: e.target.value })
          }
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
            updateStepData('user_language', e.target.value)
            // setStepData({ ...stepData, language: e.target.value })
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
        {stepData.required_compensation}
        <div>
          <RadioButton
            radioContainerClass={style.radioContainer}
            name="Equity"
            checked={stepData.required_compensation === "Equity" ? true : false}
            value="Equity"
            onChange={(e) =>
              updateStepData('required_compensation', 'Equity')
              // setStepData({ ...stepData, prefferedCompensation: "Equity" })
            }
          />
          <RadioButton
            radioContainerClass={style.radioContainer}
            name="Salary"
            checked={stepData.required_compensation === "Salary" ? true : false}
            value="Salary"
            onChange={(e) =>
              updateStepData('required_compensation', 'Salary')
              // setStepData({ ...stepData, prefferedCompensation: "Salary" })
            }
          />
          <RadioButton
            radioContainerClass={style.radioContainer}
            name="Equity + Salary "
            checked={stepData.required_compensation === "Equity + Salary " ? true : false}
            value="Equity + Salary "
            onChange={(e) =>
              updateStepData('required_compensation', 'Equity + Salary')
              // setStepData({
              //   ...stepData,
              //   prefferedCompensation: "Equity + Salary ",
              // })
            }
          />
        </div>
      </div>
    </div>
  );
}, () => true)

export default Step4;
