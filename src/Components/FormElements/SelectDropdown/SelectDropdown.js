import React from "react";

import style from "./selectDropdown.module.scss";
import globalStyle from "../../../global.module.scss";

function SelectDropdown({
  firstValue,
  value,
  optionData = [],
  onClick,
  className,
  placeholder = "",
}) {
  return (
    <select
      placeholder={placeholder}
      className={`${style.selectDropdown} ${globalStyle.headingPoppins} ${className}`}
      defaultValue={value}
      name="cars"
      id="cars"
    >
      <option value="" defaultChecked>
        {firstValue}
      </option>
      {optionData.map((m) => (
        <>
          <option value={m} onClick={onClick}>
            {m}
          </option>
        </>
      ))}
    </select>
  );
}

export default SelectDropdown;
