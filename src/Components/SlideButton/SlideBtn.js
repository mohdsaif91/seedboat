import React from "react";

import leftArrow from "../../Images/icon/leftBtnIcon.png";
import rightIcon from "../../Images/icon/rightBtnIcon.png";

import style from "./slidebtn.module.scss";

function SlideBtn({
  className,
  leftClick,
  rightClick,
  border,
  type,
  btn2Color = "",
}) {
  return (
    <div
      className={`${style.btnContainer} ${className} ${
        type === "vertical" && style.column
      }`}
    >
      <button
        className={`${style.arrowBtn} ${
          border ? style.withBorder : style.noBorder
        } ${type === "vertical" && style.verticalMargin}`}
        onClick={leftClick}
      >
        <img className={style.btnIcon} src={leftArrow} alt="" />
      </button>
      <button
        className={`${style.arrowBtn} ${
          border ? style.withBorder : style.noBorder
        } ${type === "vertical" && style.verticalMargin}`}
        onClick={rightClick}
        style={{ backgroundColor: btn2Color !== "" && btn2Color }}
      >
        <img className={style.btnIcon} src={rightIcon} alt="" />
      </button>
    </div>
  );
}

export default SlideBtn;
