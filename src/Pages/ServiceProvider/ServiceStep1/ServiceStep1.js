import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

import profileAvatar from "../../../Images/profileAvatar.png";
import { Input } from "../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { countries, toBase64, validatemobile } from "../../../util";

import style from "./serviceStep1.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

const initailSetpData = {
  serviceImage: "",
  company: "",
  phonenumber: "",
  websiteLink: "",
  category: "",
};

const ServiceStep1 = forwardRef((props, ref) => {
  const [step1Data, setStep1Data] = useState({ ...initailSetpData });
  const [formError, setFormError] = useState(false);

  const inputFileRef = useRef();

  useImperativeHandle(ref, (e) => ({
    getServiceStepData() {
      if (
        step1Data.serviceImage !== "" &&
        step1Data.company !== "" &&
        step1Data.phonenumber !== "" &&
        step1Data.websiteLink !== "" &&
        step1Data.category !== ""
      ) {
        setFormError(false);
        sessionStorage.setItem("serviceStep1data", JSON.stringify(step1Data));
        return step1Data;
      } else {
        console.log("JACK");
        setFormError(true);
        return false;
      }
    },
  }));

  const updateStepData = (pKey, pValue) => {
    setStep1Data({ ...step1Data, [pKey]: pValue });
    // sessionStorage.setItem("step1data", JSON.stringify(step1Data));
  };

  return (
    <div className={commonStyle.stepParentConatiner}>
      <div
        className={style.profileUploadContainer}
        onClick={() => inputFileRef.current.click()}
      >
        <input
          ref={inputFileRef}
          type="file"
          onChange={(e) =>
            toBase64(e.target.files[0])
              .then((data) => updateStepData("serviceImage", data))
              .catch((err) => console.log("file error "))
          }
          className={style.profileInput}
        />
        <img src={profileAvatar} alt="" className={style.profileAvatar} />
        <div className={style.mainTextConatiner}>
          <div
            className={`${style.mainTextImage} ${globalStyle.headingPoppins}`}
          >
            Select a file
          </div>
          <div
            className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
          >
            File should be less then 2mb
          </div>
        </div>
      </div>
      {formError && step1Data.serviceImage === "" && (
        <div className={globalStyle.validationErrorText}>
          User image is required
        </div>
      )}
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Company Name
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="companyName"
          placeHolder="Enter your Compant name"
          value={step1Data.company}
          onChange={(e) => updateStepData("company", e.target.value)}
        />
      </div>
      {formError && step1Data.company === "" && (
        <div className={globalStyle.validationErrorText}>
          Company Name is required
        </div>
      )}
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Phone Number
        </div>
        <Input
          type="number"
          fullWidth={true}
          className={commonStyle.stepInput}
          name="phoneNumber"
          placeHolder="Enter Phone Number"
          value={step1Data.phonenumber}
          onChange={(e) => updateStepData("phonenumber", e.target.value)}
        />
      </div>
      {step1Data.phonenumber !== "" &&
        !validatemobile(step1Data.phonenumber) && (
          <div className={globalStyle.validationErrorText}>
            Phone Number is not valid
          </div>
        )}
      {formError && step1Data.phonenumber === "" && (
        <div className={globalStyle.validationErrorText}>
          Phone Number is required
        </div>
      )}
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Website link
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="websiteLink"
          placeHolder="Add Webiste lim"
          value={step1Data.websiteLink}
          onChange={(e) => updateStepData("websiteLink", e.target.value)}
        />
      </div>
      {formError && step1Data.websiteLink === "" && (
        <div className={globalStyle.validationErrorText}>
          Website link is required
        </div>
      )}
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Select categories
        </div>
        <SelectDropdown
          className={style.dropDown}
          firstValue="Select Categories"
          value={step1Data.category}
          onChange={(e) => updateStepData("category", e.target.value)}
          optionData={countries}
        />
      </div>
      {formError && step1Data.category === "" && (
        <div className={globalStyle.validationErrorText}>
          Category is required
        </div>
      )}
    </div>
  );
});

export default ServiceStep1;
