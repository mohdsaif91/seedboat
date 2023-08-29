import React, { useState } from "react";

import { expertise, releventEpertise } from "../../../../util";
import SelectDropdown from "../../../../Components/FormElements/SelectDropdown/SelectDropdown";

import style from "./step3.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";

const initialstepData = {
  expertise: "",
  releventExpertise: "",
  skill: "",
  tool: "",
  position: "",
  time: "",
};

function Step3() {
  const [stepData, setStepData] = useState({ ...initialstepData });
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
          value={stepData.expertise}
          optionData={expertise}
          onClick={(e) =>
            setStepData({ ...stepData, expertise: e.target.value })
          }
        />
        <button className={style.addExpertisebtn}>
          <span className={style.add}>+</span>Add secondary expertise
        </button>
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          What discipline are relevant to your expertise ?
        </div>
        <SelectDropdown
          firstValue="Eg. Leadership, Management, AI/ML"
          className={commonStyle.stepInput}
          value={stepData.releventExpertise}
          optionData={releventEpertise}
          onClick={(e) =>
            setStepData({ ...stepData, releventExpertise: e.target.value })
          }
        />
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
          value={stepData.tool}
          optionData={releventEpertise}
          onClick={(e) => setStepData({ ...stepData, tool: e.target.value })}
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          What postions would you like to work as ?
        </div>
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
                stepData.position === "Co-Founder" && commonStyle.tagActive
              }`}
              onClick={(e) =>
                setStepData({ ...stepData, position: "Co-Founder" })
              }
            >
              Co-Founder
            </div>
            <div
              className={`${commonStyle.positionTag} ${
                globalStyle.headingPoppins
              } ${stepData.position === "Mentorship" && commonStyle.tagActive}`}
              onClick={() =>
                setStepData({ ...stepData, position: "Mentorship" })
              }
            >
              Mentorship
            </div>
            <div className={globalStyle.break} />
            <div
              className={`${commonStyle.positionTag} ${
                globalStyle.headingPoppins
              } ${stepData.position === "CFO" && commonStyle.tagActive}`}
              onClick={() => setStepData({ ...stepData, position: "CFO" })}
            >
              CFO
            </div>
            <div
              className={`${commonStyle.positionTag} ${
                globalStyle.headingPoppins
              } ${stepData.position === "CMO" && commonStyle.tagActive}`}
              onClick={() => setStepData({ ...stepData, position: "CMO" })}
            >
              CMO
            </div>
            <div
              className={`${commonStyle.positionTag} ${
                globalStyle.headingPoppins
              } ${stepData.position === "CTO" && commonStyle.tagActive}`}
              onClick={() => setStepData({ ...stepData, position: "CTO" })}
            >
              CTO
            </div>
          </div>
        </div>
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
            }  ${stepData.time === "Full Time" && commonStyle.tagActive}`}
            onClick={(e) => setStepData({ ...stepData, time: "Full Time" })}
          >
            Full Time
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            }  ${stepData.time === "Part Time" && commonStyle.tagActive}`}
            onClick={(e) => setStepData({ ...stepData, time: "Part Time" })}
          >
            Part Time
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
