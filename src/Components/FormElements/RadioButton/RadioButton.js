import React from "react";

import style from "./radioButton.module.scss";
import globalStyle from "../../../global.module.scss";

function RadioButton({
  checked,
  className = "",
  name,
  onChange,
  value,
  radioContainerClass = "",
}) {
  return (
    <div className={`${style.radioBtnContainer} ${radioContainerClass}`}>
      <input
        className={`${style.inputRadio}  ${className}`}
        checked={checked === value}
        onChange={onChange}
        type="radio"
        id={name}
        name={name}
        value={value}
      />
      <label
        className={`${style.radioLabel} ${globalStyle.headingPoppins}`}
        htmlFor={name}
      >
        {name}
      </label>
    </div>
  );
}

export default RadioButton;
