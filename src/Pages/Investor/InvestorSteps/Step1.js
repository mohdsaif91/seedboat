import React from "react";

import Individual from "../../../Images/individual.png";
import Company from "../../../Images/company.png";

import style from "../investor.module.scss";
import globalStyle from "../../../global.module.scss";

function Step1({ setFormData, formData, error = false }) {
  return (
    <div>
      <div className={`${style.investorHeading} ${globalStyle.headingPoppins}`}>
        What type of investor are you ?
      </div>
      <div className={style.investorType}>
        <div className={style.investorPatrentCard}>
          <div
            onClick={() =>
              setFormData({
                ...formData,
                investor_type: "individual",
              })
            }
            className={`${style.investorCard} ${
              formData.investor_type === "individual" && style.cardSelected
            }`}
          >
            <img alt="" src={Individual} className={style.investorImg} />
            <label className={globalStyle.headingPoppins}>Individual</label>
          </div>
          <div
            onClick={() =>
              setFormData({ ...formData, investor_type: "company" })
            }
            className={`${style.investorCard} ${
              formData.investor_type === "company" && style.cardSelected
            }`}
          >
            <img alt="" src={Company} className={style.investorImg} />
            <label className={globalStyle.headingPoppins}>Company</label>
            <label
              className={`${style.investorSubHeading} ${globalStyle.subHeadingPoppins}`}
            >
              (VC/Family office/Corporate/other)
            </label>
          </div>
        </div>
        {error && formData.investor_type === "" && (
          <div className={globalStyle.validationErrorText}>
            Investor Type is required
          </div>
        )}
      </div>
    </div>
  );
}

export default Step1;
