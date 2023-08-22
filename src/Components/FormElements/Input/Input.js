import React from "react";

import usa from "../../../Images/usa.png";

import style from "./input.module.scss";
import globalStyle from "../../../global.module.scss";

export const Input = ({
  className,
  value,
  name,
  onChange,
  withIcon = false,
  placeHolder,
  fullWidth = false,
}) => {
  return (
    <div className={`${style.inputContainer} ${fullWidth && style.fullWidth}`}>
      <input
        value={value}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        className={`${style.input} ${className} ${globalStyle.headingPoppins} ${
          fullWidth && style.fullWidth
        }`}
      />
      {withIcon && <img className={style.inputImage} alt="" src={usa} />}
    </div>
  );
};
