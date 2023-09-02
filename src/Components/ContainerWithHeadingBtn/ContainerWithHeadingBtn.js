import React from "react";

import style from "./ContainerWithHeadingBtn.module.scss";
import globalStyle from "../../global.module.scss";
import { BtnRect, WhiteRoundBtn } from "../Button/Button";

function ContainerWithHeadingBtn({
  btnText,
  heading,
  subHeading,
  className = "",
  rectBtn,
  onClick,
  headingClass = "",
}) {
  return (
    <div className={`${style.becomeInvestorContainer} ${className}`}>
      <div className={style.becomeHeadingContainer}>
        <div
          className={`${globalStyle.pageHeading} ${style.becomePageHeading} ${headingClass}`}
        >
          {heading}
        </div>
        <div
          className={`${style.subHeadingBecome} ${globalStyle.subHeadingPoppins}`}
        >
          {subHeading}
        </div>
      </div>
      {rectBtn ? (
        <BtnRect text={btnText} onClick={onClick} color="#1F80A3" />
      ) : (
        <WhiteRoundBtn text={btnText} onClick={onClick} />
      )}
    </div>
  );
}

export default ContainerWithHeadingBtn;
