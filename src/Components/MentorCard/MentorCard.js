import React from "react";

import work from "../../Images/work.png";
import star from "../../Images/star.png";
import language from "../../Images/language.png";

import style from "./mentorCard.module.scss";

function MentorCard({ data }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImageContainer}>
        <div className={style.tag}>{data.availability}</div>
        <img alt="" className={style.cardImg} src={data.img} />
      </div>
      <div className={style.nameContainer}>
        <div className={style.name}>{data.name}</div>
        <img className={style.countryFlag} alt="" src={data.countryFlag} />
      </div>
      <div className={style.workContainer}>
        <img className={style.workIcon} alt="" src={work} />
        <div className={style.designation}>{data.designation}</div>
      </div>
      <div className={style.reviewContainer}>
        <img className={style.reviewIcon} alt="" src={star} />
        <div className={style.review}>{data.review}</div>
      </div>
      <div className={style.languageContainer}>
        <div className={style.languageLabelIconContainer}>
          <img className={style.languageIcon} alt="" src={language} />
          <span className={style.languageLabel}>Languages</span>
        </div>
        <div className={style.language}>{data.Languages}</div>
      </div>
    </div>
  );
}

export default MentorCard;
