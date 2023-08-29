import React, { useState } from "react";

import style from "./step2.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";
import { Input } from "../../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { countries, gender, months, years } from "../../../../util";

const initialStepData = {
  email: "",
  mobile: "",
  gender: "",
  country: "",
  school: "",
  company: "",
  yourTitle: "",
  yearsOfProfessionalExp: "",
  montsofProfessionalExp: "",
};

function Step2() {
  const [stepData, setStepData] = useState({ ...initialStepData });
  return (
    <div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Email Address
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="email"
          placeHolder="Enter email"
          value={stepData.email}
          onChange={(e) =>
            setStepData({
              ...stepData,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className={style.twoInputContainer}>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Phone Number
          </div>
          <Input
            fullWidth={true}
            className={commonStyle.stepInput}
            name="mobile"
            placeHolder="Enter Phone"
            value={stepData.mobile}
            onChange={(e) =>
              setStepData({
                ...stepData,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Gender
          </div>
          <SelectDropdown
            className={commonStyle.stepInput}
            value={stepData.gender}
            optionData={gender}
            firstValue="Select one"
            onClick={(e) =>
              setStepData({ ...stepData, gender: e.target.value })
            }
          />
          {/* <Input
            fullWidth={true}
            className={commonStyle.stepInput}
            name="email"
            placeHolder="Mentorship"
            value={stepData.email}
            onChange={(e) =>
              setStepData({
                ...stepData,
                email: e.target.value,
              })
            }
          /> */}
        </div>
      </div>
      <div className={style.twoInputContainer}>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Country
          </div>
          <SelectDropdown
            className={commonStyle.stepInput}
            value={stepData.country}
            optionData={countries}
            firstValue="Eg.USA, India, etc"
            onClick={(e) =>
              setStepData({ ...stepData, country: e.target.value })
            }
          />
        </div>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            School
          </div>
          <Input
            fullWidth={true}
            className={commonStyle.stepInput}
            name="school"
            placeHolder="Eg.UCLA, SJSU"
            value={stepData.school}
            onChange={(e) =>
              setStepData({
                ...stepData,
                school: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className={style.twoInputContainer}>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Company
          </div>
          <Input
            fullWidth={true}
            className={commonStyle.stepInput}
            name="company"
            placeHolder="Eg. Apple, Microsoft"
            value={stepData.company}
            onChange={(e) =>
              setStepData({
                ...stepData,
                company: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Your Title
          </div>
          <Input
            fullWidth={true}
            className={commonStyle.stepInput}
            name="title"
            placeHolder="Eg. Designer, Student"
            value={stepData.yourTitle}
            onChange={(e) =>
              setStepData({
                ...stepData,
                yourTitle: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className={style.twoInputContainer}>
        <div className={style.inputItem}>
          <div
            className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
          >
            Years of professional experience
          </div>
          <SelectDropdown
            className={commonStyle.stepInput}
            value={stepData.yearsOfProfessionalExp}
            optionData={years}
            firstValue="Years"
            onChange={(e) =>
              setStepData({
                ...stepData,
                yearsOfProfessionalExp: e.target.value,
              })
            }
          />
        </div>
        <div className={style.inputItem}>
          <SelectDropdown
            className={commonStyle.stepInput}
            value={stepData.montsofProfessionalExp}
            optionData={months}
            firstValue="Month"
            onChange={(e) =>
              setStepData({
                ...stepData,
                montsofProfessionalExp: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Step2;
