import React, { forwardRef, useState, useImperativeHandle } from "react";

import { expertise, releventEpertise } from "../../../../util";
import SelectDropdown from "../../../../Components/FormElements/SelectDropdown/SelectDropdown";

import style from "./step3.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";

const initialstepData = {
  primanry_experience: "",
  discipline: "",
  expertise_skills: "",
  used_tools: "",
  proposed_position: "",
  user_period: "",
};

const Step3 = forwardRef(
  (props, ref) => {
    const [stepData, setStepData] = useState({ ...initialstepData });
    const [formError, setFormError] = useState(false);

    const updateStepData = (pKey, pValue) => {
      setStepData({ ...stepData, [pKey]: pValue });
    };

    useImperativeHandle(ref, (e) => ({
      getStepData() {
        if (
          stepData.primanry_experience !== "" &&
          stepData.discipline !== "" &&
          stepData.used_tools !== "" &&
          stepData.proposed_position !== "" &&
          stepData.user_period !== ""
        ) {
          setFormError(false);
          sessionStorage.setItem("step3data", JSON.stringify(stepData));
          return stepData;
        } else {
          setFormError(true);
          return false;
        }
      },
    }));
    return (
      <div className={style.step3Conatiner}>
        <div className={commonStyle.formInputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Select primary expertise
          </div>
          <SelectDropdown
            firstValue="Eg. Designer, software, animation"
            className={commonStyle.stepInput}
            value={stepData.primanry_experience}
            optionData={expertise}
            onChange={
              (e) => {
                updateStepData("primanry_experience", e.target.value);
              }
              // setStepData({ ...stepData, expertise: e.target.value })
            }
          />
          {formError && stepData.primanry_experience === "" && (
            <div className={globalStyle.validationErrorText}>
              Primary skill is required
            </div>
          )}
          {/* <button className={style.addExpertisebtn}>
            <span className={style.add}>+</span>Add secondary expertise
          </button> */}
        </div>
        <div className={commonStyle.formInputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            What discipline are relevant to your expertise ?
          </div>
          <SelectDropdown
            firstValue="Eg. Graphic Desin,Product Design, Animation"
            className={commonStyle.stepInput}
            value={stepData.discipline}
            optionData={releventEpertise}
            onChange={
              (e) => updateStepData("discipline", e.target.value)
              // setStepData({ ...stepData, discipline: e.target.value })
            }
          />
          {formError && stepData.discipline === "" && (
            <div className={globalStyle.validationErrorText}>
              Disciline is required
            </div>
          )}
        </div>

        <div className={commonStyle.formInputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            What skills fo you have expertise in ?
          </div>
          <SelectDropdown
            firstValue="Eg. Leadership, Managment, AI/ML"
            className={commonStyle.stepInput}
            value={stepData.expertise_skills}
            optionData={releventEpertise}
            onChange={
              (e) => updateStepData("expertise_skills", e.target.value)
              // setStepData({ ...stepData, used_tools: e.target.value })
            }
          />
          {formError && stepData.used_tools === "" && (
            <div className={globalStyle.validationErrorText}>
              Tools is required
            </div>
          )}
        </div>

        <div className={commonStyle.formInputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            What tools do you have expertise in ?
          </div>
          <SelectDropdown
            firstValue="Eg. Figma, React, Postman"
            className={commonStyle.stepInput}
            value={stepData.used_tools}
            optionData={releventEpertise}
            onChange={
              (e) => updateStepData("used_tools", e.target.value)
              // setStepData({ ...stepData, used_tools: e.target.value })
            }
          />
          {formError && stepData.used_tools === "" && (
            <div className={globalStyle.validationErrorText}>
              Tools is required
            </div>
          )}
        </div>
        <div className={commonStyle.formInputItem}>
          <div className={commonStyle.formInputItem}>
            <div
              className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
            >
              What postions would you like to work as ?
            </div>
            <div className={commonStyle.positionContainer}>
              <div
                className={`${commonStyle.positionTag} ${
                  globalStyle.headingPoppins
                }  ${
                  stepData.proposed_position === "Co-Founder" &&
                  commonStyle.tagActive
                }`}
                onClick={
                  (e) => updateStepData("proposed_position", "Co-Founder")
                  // setStepData({ ...stepData, proposed_position: "Co-Founder" })
                }
              >
                Co-Founder
              </div>
              <div
                className={`${commonStyle.positionTag} ${
                  globalStyle.headingPoppins
                } ${
                  stepData.proposed_position === "Mentorship" &&
                  commonStyle.tagActive
                }`}
                onClick={
                  () => updateStepData("proposed_position", "Mentorship")
                  // setStepData({ ...stepData, proposed_position: "Mentorship" })
                }
              >
                Mentorship
              </div>
              <div className={globalStyle.break} />
              <div
                className={`${commonStyle.positionTag} ${
                  globalStyle.headingPoppins
                } ${
                  stepData.proposed_position === "CFO" && commonStyle.tagActive
                }`}
                onClick={
                  () => updateStepData("proposed_position", "CFO")
                  // setStepData({ ...stepData, proposed_position: "CFO" })
                }
              >
                CFO
              </div>
              <div
                className={`${commonStyle.positionTag} ${
                  globalStyle.headingPoppins
                } ${
                  stepData.proposed_position === "CMO" && commonStyle.tagActive
                }`}
                onClick={
                  () => updateStepData("proposed_position", "CMO")
                  // setStepData({ ...stepData, proposed_position: "CMO" })
                }
              >
                CMO
              </div>
              <div
                className={`${commonStyle.positionTag} ${
                  globalStyle.headingPoppins
                } ${
                  stepData.proposed_position === "CTO" && commonStyle.tagActive
                }`}
                onClick={
                  () => updateStepData("proposed_position", "CTO")
                  // setStepData({ ...stepData, proposed_position: "CTO" })
                }
              >
                CTO
              </div>
            </div>
          </div>
          {formError && stepData.proposed_position === "" && (
            <div className={globalStyle.validationErrorText}>
              proposed Position is required
            </div>
          )}
        </div>

        <div className={commonStyle.formInputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Time Commitment
          </div>
          <div className={commonStyle.positionContainer}>
            <div
              className={`${commonStyle.positionTag} ${
                globalStyle.headingPoppins
              }  ${
                stepData.user_period === "Full Time" && commonStyle.tagActive
              }`}
              onClick={
                (e) => updateStepData("user_period", "Full Time")
                // setStepData({ ...stepData, time: "Full Time" })
              }
            >
              Full Time
            </div>
            <div
              className={`${commonStyle.positionTag} ${
                globalStyle.headingPoppins
              }  ${
                stepData.user_period === "Part Time" && commonStyle.tagActive
              }`}
              onClick={
                (e) => updateStepData("user_period", "Part Time")
                // setStepData({ ...stepData, time: "Part Time" })
              }
            >
              Part Time
            </div>
          </div>
        </div>
        {formError && stepData.user_period === "" && (
          <div className={globalStyle.validationErrorText}>
            Time commitment is required
          </div>
        )}
      </div>
    );
  },
  () => true
);

export default Step3;
