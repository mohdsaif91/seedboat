import React, { useRef, useState } from "react";

import profileAvatar from "../../../Images/profileAvatar.png";
import { Input } from "../../../Components/FormElements/Input/Input";

import style from "./serviceStep1.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { countries } from "../../../util";

const initailSetpData = {
  logo: null,
  companyName: "",
  description: "",
  mobile: "",
  websiteLink: "",
  selectCategory: "",
};

function ServiceStep1() {
  const [step1Data, setStep1Data] = useState({ ...initailSetpData });
  const inputFileRef = useRef();

  return (
    <div className={commonStyle.stepParentConatiner}>
      <div
        className={style.profileUploadContainer}
        onClick={() => inputFileRef.current.click()}
      >
        <input
          ref={inputFileRef}
          type="file"
          onChange={(e) => console.log(e.target.files)}
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
          value={step1Data.companyName}
          onChange={(e) =>
            setStep1Data({
              ...step1Data,
              companyName: e.target.value,
            })
          }
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Phone Number
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="phoneNumber"
          placeHolder="Enter Phone Number"
          value={step1Data.mobile}
          onChange={(e) =>
            setStep1Data({
              ...step1Data,
              mobile: e.target.value,
            })
          }
        />
      </div>
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
          onChange={(e) =>
            setStep1Data({
              ...step1Data,
              websiteLink: e.target.value,
            })
          }
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Select categories
        </div>
        <SelectDropdown
          className={style.dropDown}
          firstValue="Eg.USA, India, etc"
          value={step1Data.selectCategory}
          onClick={(e) =>
            setStep1Data({ ...step1Data, selectCategory: e.target.value })
          }
          optionData={countries}
        />
      </div>
    </div>
  );
}

export default ServiceStep1;
