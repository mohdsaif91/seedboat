import React from "react";

import style from "./button.module.scss";
import globalStyle from "../../global.module.scss";

function Button({ className, text, onClick, type = "" }) {
  return (
    <button
      className={`${style.btn} ${className} ${
        type === "secondary" && style.secondaryBtn
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

export const WhiteBtn = ({ text, onClick, className }) => {
  return (
    <button
      className={`${style.whiteBtn} ${globalStyle.headingPoppins} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BlackBtn = ({ text, onClick, className, withIcon = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${style.blackBtn} ${globalStyle.headingPoppins} ${className}`}
    >
      {text}
      {withIcon && (
        <div className={style.btnIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.6967C6.46447 0.403806 5.98959 0.403806 5.6967 0.6967C5.40381 0.989593 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6.75L11 6.75L11 5.25L1 5.25L1 6.75Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export const WhiteRoundBtn = ({ text, onClick, className }) => {
  return (
    <button
      className={`${style.whiteBtnRound} ${globalStyle.headingPoppins} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BtnRect = ({
  bgColor = "",
  color = "",
  className,
  onClick,
  text,
  border = false,
  borderColor = "#fff",
}) => {
  return (
    <button
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        border: `${border ? `1px solid ${borderColor}` : "none"}`,
      }}
      className={`${style.btnRect} ${globalStyle.headingPoppins} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
