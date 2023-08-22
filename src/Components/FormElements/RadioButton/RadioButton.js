import React from "react";

import style from "./radioButton.module.scss";
import globalStyle from "../../../global.module.scss";

function RadioButton({ checked, className = "", name, onChange, value }) {
  return (
    <div className={style.radioBtnContainer}>
      <input
        className={`${style.inputRadio}  ${className}`}
        checked={checked === value}
        onChange={onChange}
        type="radio"
        id="html"
        name={name}
        value={value}
      />
      <label
        className={`${style.radioLabel} ${globalStyle.headingPoppins}`}
        for="html"
      >
        {name}
      </label>
    </div>
  );
}

export default RadioButton;
