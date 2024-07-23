import React, { forwardRef, useImperativeHandle, useState } from "react";

import { Input } from "../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { experienceCount } from "../../../util";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";

import style from "./serviceStep2.module.scss";
import commonStyle from "../../../common.module.scss";
import globalStyle from "../../../global.module.scss";

const initialStepData = {
  location: "",
  experience: 0,
  client: 0,
  description: "",
};

const ServiceStep2 = forwardRef((props, ref) => {
  const [stepData, setStepData] = useState({ ...initialStepData });
  const [formError, setFormError] = useState(false);

  useImperativeHandle(ref, (e) => ({
    getServiceStepData() {
      if (
        stepData.location !== "" &&
        stepData.experience !== 0 &&
        stepData.client !== 0 &&
        stepData.description !== ""
      ) {
        setFormError(false);
        sessionStorage.setItem("serviceStep2data", JSON.stringify(stepData));
        return stepData;
      } else {
        setFormError(true);
        return false;
      }
    },
  }));

  console.log(stepData, " <>?");

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
          value={stepData.experience}
          optionData={experienceCount}
          firstValue="Select one"
          onChange={(e) =>
            setStepData({ ...stepData, experience: parseInt(e.target.value) })
          }
        />
      </div>
      {formError && stepData.experience === 0 && (
        <div className={globalStyle.validationErrorText}>
          Experience is required
        </div>
      )}
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
      {formError && stepData.location === "" && (
        <div className={globalStyle.validationErrorText}>
          Location is required
        </div>
      )}
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
          type="number"
          placeHolder="eg 7"
          value={stepData.client}
          onChange={(e) =>
            setStepData({
              ...stepData,
              client: parseInt(e.target.value),
            })
          }
        />
      </div>
      {formError && stepData.client === 0 && (
        <div className={globalStyle.validationErrorText}>
          Number of Client is required
        </div>
      )}
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
      {formError && stepData.description === "" && (
        <div className={globalStyle.validationErrorText}>
          Description is required
        </div>
      )}
    </div>
  );
});

export default ServiceStep2;
