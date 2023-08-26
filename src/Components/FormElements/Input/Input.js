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
  type = "input",
  withSymbol = false,
  symbol = "",
}) => {
  return (
    <div
      className={`${style.inputContainer} ${fullWidth && style.fullWidth} ${
        withSymbol && style.dFlexCenter
      }`}
    >
      {withSymbol && (
        <div
          className={`${style.symbolContainer} ${globalStyle.headingPoppins}`}
        >
          {symbol}
        </div>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        className={`${style.input} ${className} ${globalStyle.headingPoppins} ${
          fullWidth && style.fullWidth
        } ${withSymbol && style.leftPadding}`}
      />
      {withIcon && <img className={style.inputImage} alt="" src={usa} />}
    </div>
  );
};

export const InputFile = React.forwardRef(
  ({ className, value, name, onChange, fullWidth = false }, ref) => (
    <input
      ref={ref}
      type="file"
      value={value}
      name={name}
      onChange={onChange}
      className={`${style.input} ${className} ${globalStyle.headingPoppins} ${
        fullWidth && style.fullWidth
      }`}
    />
  )
);
