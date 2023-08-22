import React from "react";

import heart from "../../../Images/icon/heart.png";
import share from "../../../Images/icon/share.png";
import VerticalDevider from "../../VerticalDevider/VerticalDevider";

import style from "./investCard.module.scss";
import globalStyle from "../../../global.module.scss";

function InvestCard({ data, topPickCard = false }) {
  const {
    img,
    sector,
    location,
    target,
    current,
    donor,
    title,
    stage,
    subTitle,
  } = data;
  console.log(sector, location, target, current, donor, title, stage, subTitle);
  return (
    <div className={style.investCard}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={style.cardImage}
      >
        <div className={style.verticalIconContainer}>
          <div className={style.iconContainer}>
            <img alt="" className={style.cardIcon} src={heart} />
          </div>
          <div className={style.iconContainer}>
            <img alt="" className={style.cardIcon} src={share} />
          </div>
        </div>
      </div>
      <div className={style.cardPointscontainer}>
        {topPickCard ? (
          <>
            <div className={style.labelValueContainer}>
              <label
                className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
              >
                Sector
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {sector}
              </div>
            </div>
            <VerticalDevider color="#1F80A3" height="24px" />
            <div className={style.labelValueContainer}>
              <label
                className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
              >
                Target
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {target}
              </div>
            </div>
            <VerticalDevider color="#1F80A3" height="24px" />
            <div className={style.labelValueContainer}>
              <label
                className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
              >
                Stage
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {stage}
              </div>
            </div>
            <VerticalDevider color="#1F80A3" height="24px" />
            <div className={style.labelValueContainer}>
              <label
                className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
              >
                Location
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {location}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={style.labelValueContainer}>
              <label
                className={`style.cardLabel ${globalStyle.subHeadingPoppins}`}
              >
                Current
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {current}
              </div>
            </div>
            <VerticalDevider color="#1F80A3" height="24px" />
            <div className={style.labelValueContainer}>
              <label
                className={`style.cardLabel ${globalStyle.subHeadingPoppins}`}
              >
                Target
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {target}
              </div>
            </div>
            <VerticalDevider color="#1F80A3" height="24px" />
            <div className={style.labelValueContainer}>
              <label
                className={`style.cardLabel ${globalStyle.subHeadingPoppins}`}
              >
                Donors
              </label>
              <div
                className={`${style.cardValue} ${globalStyle.headingPoppins}`}
              >
                {donor}
              </div>
            </div>
          </>
        )}
      </div>
      <div className={globalStyle.horizontalDevider} />
      <div className={`${style.cardTitle} ${globalStyle.headingPoppins}`}>
        {title}
      </div>
      <div className={`${style.cardSubTitle} ${globalStyle.subHeadingPoppins}`}>
        {subTitle}
      </div>
    </div>
  );
}

export default InvestCard;
