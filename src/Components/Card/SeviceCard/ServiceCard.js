import React from "react";

import heart from "../../../Images/icon/heart 1.png";
import Button from "../../Button/Button";

import style from "./serviceCard.module.scss";
import globalStyle from "../../../global.module.scss";

function ServiceCard({
  cardHeading,
  companyLogo = "",
  companyWork = [],
  subHeading,
  primaryBtnClick,
  SecondaryBtnCLick,
}) {
  return (
    <div className={style.serviceCardContainer}>
      <div className={style.cardHeader}>
        <img src={companyLogo} className={style.companyIcon} alt="" />{" "}
        <img src={heart} className={style.heartIcon} alt="" />
      </div>
      <div className={`${style.cardHeading} ${globalStyle.headingPoppins}`}>
        {cardHeading}
      </div>
      <div className={style.companyWorksContainer}>
        {companyWork.map((m, i) => (
          <>
            <div
              className={`${style.workTag} ${globalStyle.subHeadingPoppins}`}
            >
              {m}{" "}
            </div>
            {(i + 1) % 3 === 0 && <div className={globalStyle.break} />}
          </>
        ))}
      </div>
      <div className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}>
        {subHeading}
      </div>
      <div className={style.btnContainer}>
        <Button
          className={`${style.cardBtn1} ${globalStyle.headingPoppins}`}
          text="Message"
          onClick={primaryBtnClick}
        />
        <Button
          className={style.cardBtn2}
          text="Know More"
          onClick={SecondaryBtnCLick}
        />
      </div>
    </div>
  );
}

export default ServiceCard;
