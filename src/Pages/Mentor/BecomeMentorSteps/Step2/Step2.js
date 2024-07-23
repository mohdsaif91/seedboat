import React, { useState, useImperativeHandle, forwardRef } from "react";

import { Input } from "../../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../../Components/FormElements/SelectDropdown/SelectDropdown";
import {
  countries,
  gender,
  months,
  validateEmail,
  validatemobile,
  years,
} from "../../../../util";

import style from "./step2.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";

const initialStepData = {
  email: "",
  phonenumber: "",
  gender: "",
  country: "",
  school: "",
  company: "",
  designation: "",
  yearsOfProfessionalExp: "",
  montsofProfessionalExp: "",
  professional_experience: "",
};

const Step2 = forwardRef(
  (props, ref) => {
    const [stepData, setStepData] = useState({ ...initialStepData });
    const [formError, setFormError] = useState(false);

    const updateStepData = (pKey, pValue) => {
      setStepData({ ...stepData, [pKey]: pValue });
    };
    useImperativeHandle(ref, (e) => ({
      getStepData() {
        if (
          stepData.email !== "" &&
          validateEmail(stepData.email) &&
          stepData.phonenumber !== "" &&
          validatemobile(stepData.phonenumber) &&
          stepData.gender !== "" &&
          stepData.country !== "" &&
          stepData.school !== "" &&
          stepData.company !== "" &&
          stepData.designation !== "" &&
          stepData.yearsOfProfessionalExp !== "" &&
          stepData.montsofProfessionalExp !== ""
        ) {
          setFormError(false);
          console.log("stepDAta", stepData);
          sessionStorage.setItem("step2data", JSON.stringify(stepData));
          return stepData;
        } else {
          setFormError(true);
          return false;
        }
      },
    }));

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
            onChange={
              (e) => updateStepData("email", e.target.value)
              // setStepData({
              //   ...stepData,
              //   email: e.target.value,
              // })
            }
          />
        </div>
        {formError && stepData.email === "" && (
          <div className={globalStyle.validationErrorText}>
            Email is required
          </div>
        )}
        {!validateEmail(stepData.email) && stepData.email !== "" && (
          <div className={globalStyle.validationErrorText}>
            Email is not valid.
          </div>
        )}
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
              value={stepData.phonenumber}
              onChange={
                (e) => updateStepData("phonenumber", e.target.value)
                // setStepData({
                //   ...stepData,
                //   phonenumber: e.target.value,
                // })
              }
            />
            {formError && stepData.phonenumber === "" && (
              <div className={globalStyle.validationErrorText}>
                Phone number is required
              </div>
            )}
            {!validatemobile(stepData.phonenumber) &&
              stepData.phonenumber !== "" && (
                <div className={globalStyle.validationErrorText}>
                  Phone number is not valid
                </div>
              )}
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
              onChange={
                (e) => {
                  console.log(e.target);
                  updateStepData("gender", e.target.value);
                }
                // setStepData({ ...stepData, gender: e.target.value })
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
            {formError && stepData.gender === "" && (
              <div className={globalStyle.validationErrorText}>
                Gender is required
              </div>
            )}
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
              onChange={
                (e) => updateStepData("country", e.target.value)
                // setStepData({ ...stepData, country: e.target.value })
              }
            />
            {formError && stepData.country === "" && (
              <div className={globalStyle.validationErrorText}>
                Country is required
              </div>
            )}
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
              onChange={
                (e) => updateStepData("school", e.target.value)
                // setStepData({
                //   ...stepData,
                //   school: e.target.value,
                // })
              }
            />
            {formError && stepData.school === "" && (
              <div className={globalStyle.validationErrorText}>
                School is required
              </div>
            )}
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
              onChange={
                (e) => updateStepData("company", e.target.value)
                // setStepData({
                //   ...stepData,
                //   company: e.target.value,
                // })
              }
            />
            {formError && stepData.company === "" && (
              <div className={globalStyle.validationErrorText}>
                Company is required
              </div>
            )}
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
              value={stepData.designation}
              onChange={
                (e) => updateStepData("designation", e.target.value)
                // setStepData({
                //   ...stepData,
                //   designation: e.target.value,
                // })
              }
            />
            {formError && stepData.designation === "" && (
              <div className={globalStyle.validationErrorText}>
                Title is required
              </div>
            )}
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
              onChange={
                (e) => updateStepData("yearsOfProfessionalExp", e.target.valud)
                // setStepData({
                //   ...stepData,
                //   yearsOfProfessionalExp: e.target.value,
                // })
              }
            />
            {formError && stepData.yearsOfProfessionalExp === "" && (
              <div className={globalStyle.validationErrorText}>
                Year is required
              </div>
            )}
          </div>
          <div className={style.inputItem}>
            <div
              className={`${commonStyle.formLabel} ${style.hidden} ${globalStyle.headingPoppins}`}
            >
              MOnth
            </div>
            <SelectDropdown
              className={commonStyle.stepInput}
              value={stepData.montsofProfessionalExp}
              optionData={months}
              firstValue="Month"
              onChange={
                (e) => updateStepData("montsofProfessionalExp", e.target.value)
                // setStepData({
                //   ...stepData,
                //   montsofProfessionalExp: e.target.value,
                // })
              }
            />
            {formError && stepData.montsofProfessionalExp === "" && (
              <div className={globalStyle.validationErrorText}>
                Month is required
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
  () => true
);

export default Step2;
