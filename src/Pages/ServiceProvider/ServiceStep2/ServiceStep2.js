import React, { useState } from "react";

import { Input } from "../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { experienceCount } from "../../../util";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";

import style from "./serviceStep2.module.scss";
import commonStyle from "../../../common.module.scss";
import globalStyle from "../../../global.module.scss";

const initialStepData = {
  yearsOfExperience: "",
  location: "",
  clientsServed: "",
  description: "",
};

function ServiceStep2() {
  const [stepData, setStepData] = useState({ ...initialStepData });
  return (
    <div className={commonStyle.stepParentConatiner}>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Years of experience
        </div>
        <SelectDropdown
          className={style.dropDown}
          value={stepData.yearsOfExperience}
          optionData={experienceCount}
          firstValue="Select one"
          onClick={(e) =>
            setStepData({ ...stepData, yearsOfExperience: e.target.value })
          }
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Location
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="location"
          placeHolder="Eg.USA, India, etc"
          value={stepData.location}
          onChange={(e) =>
            setStepData({
              ...stepData,
              location: e.target.value,
            })
          }
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Clients served
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="companyName"
          placeHolder="eg 7"
          value={stepData.clientsServed}
          onChange={(e) =>
            setStepData({
              ...stepData,
              clientsServed: e.target.value,
            })
          }
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Description
        </div>
        <TextArea
          className={style.stepTextArea}
          name="companyName"
          placeHolder="Type your descriptiopn"
          value={stepData.description}
          onChange={(e) =>
            setStepData({
              ...stepData,
              description: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}

export default ServiceStep2;
