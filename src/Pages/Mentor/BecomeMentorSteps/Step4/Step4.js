import React, { useState, useImperativeHandle, forwardRef } from "react";

import TextArea from "../../../../Components/FormElements/TextArea/TextArea";
import { Input } from "../../../../Components/FormElements/Input/Input";
import RadioButton from "../../../../Components/FormElements/RadioButton/RadioButton";

import style from "./step4.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";

// address,  expertise_skills,

const initialStepData = {
  user_message: "",
  user_speaking_lang: "",
  required_compensation: "",
};

const Step4 = forwardRef(
  (props, ref) => {
    const [stepData, setStepData] = useState({ ...initialStepData });
    const [formError, setFormError] = useState(false);

    const updateStepData = (pKey, pValue) => {
      setStepData({ ...stepData, [pKey]: pValue });
    };

    useImperativeHandle(ref, (e) => ({
      getStepData() {
        if (
          stepData.user_message !== "" &&
          stepData.user_language !== "" &&
          stepData.required_compensation !== ""
        ) {
          setFormError(false);
          sessionStorage.setItem("step4data", JSON.stringify(stepData));
          return stepData;
        } else {
          setFormError(true);
          return false;
        }
      },
    }));

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
            onChange={
              (e) => updateStepData("user_message", e.target.value)
              // setStepData({ ...stepData, story: e.target.value })
            }
            placeHolder="Tell us more about yourself, your goals and what you love!"
          />
        </div>
        {formError && stepData.user_message === "" && (
          <div className={globalStyle.validationErrorText}>
            User message is required
          </div>
        )}
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
              updateStepData("user_speaking_lang", e.target.value)
            }
            placeHolder="Eg: English, French"
          />
        </div>
        {formError && stepData.user_language === "" && (
          <div className={globalStyle.validationErrorText}>
            User language is required
          </div>
        )}
        <div className={commonStyle.formInputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Preffered Compensation
          </div>
          <div>
            <RadioButton
              radioContainerClass={style.radioContainer}
              name="Equity"
              checked={
                stepData.required_compensation === "Equity" ? true : false
              }
              value="Equity"
              onChange={
                (e) => updateStepData("required_compensation", "Equity")
                // setStepData({ ...stepData, prefferedCompensation: "Equity" })
              }
            />
            <RadioButton
              radioContainerClass={style.radioContainer}
              name="Salary"
              checked={
                stepData.required_compensation === "Salary" ? true : false
              }
              value="Salary"
              onChange={
                (e) => updateStepData("required_compensation", "Salary")
                // setStepData({ ...stepData, prefferedCompensation: "Salary" })
              }
            />
            <RadioButton
              radioContainerClass={style.radioContainer}
              name="Equity + Salary "
              checked={
                stepData.required_compensation === "Equity + Salary"
                  ? true
                  : false
              }
              value="Equity + Salary "
              onChange={
                (e) =>
                  updateStepData("required_compensation", "Equity + Salary")
                // setStepData({
                //   ...stepData,
                //   prefferedCompensation: "Equity + Salary ",
                // })
              }
            />
          </div>
          {formError && stepData.required_compensation === "" && (
            <div className={globalStyle.validationErrorText}>
              Required compensation is required
            </div>
          )}
        </div>
      </div>
    );
  },
  () => true
);

export default Step4;
