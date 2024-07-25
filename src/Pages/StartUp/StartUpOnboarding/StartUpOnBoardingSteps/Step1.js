import React from "react";

import { Input } from "../../../../Components/FormElements/Input/Input";

import style from "../startUpOnboarding.module.scss";
import globalStyle from "../../../../global.module.scss";
import SelectDropdown from "../../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { investmentType } from "../../../../util";

function Step1({ formError = false, onBoardingForm, setOnBoardingForm }) {
  return (
    <div className={style.step1}>
      <Input
        value={onBoardingForm.projectName}
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            projectName: e.target.value,
          })
        }
        className={style.startUpInput}
        placeHolder="Project Name"
      />
      {formError && onBoardingForm.projectName === "" && (
        <div className={globalStyle.validationErrorText}>
          Project Name is required
        </div>
      )}
      <Input
        value={onBoardingForm.projectOwner}
        className={style.startUpInput}
        placeHolder="Project Owner"
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            projectOwner: e.target.value,
          })
        }
      />
      {formError && onBoardingForm.projectOwner === "" && (
        <div className={globalStyle.validationErrorText}>
          Project Owner is required
        </div>
      )}
      <SelectDropdown
        className={`${style.startUpInput} ${style.dropdown}`}
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            projectCategory: e.target.value,
          })
        }
        value={onBoardingForm.projectCategory}
        placeholder="Category"
        firstValue="Category"
        optionData={investmentType}
      />
      {formError && onBoardingForm.projectCategory === "" && (
        <div className={globalStyle.validationErrorText}>
          Project Category is required
        </div>
      )}
    </div>
  );
}

export default Step1;
