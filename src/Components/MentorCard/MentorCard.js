import React from "react";

import work from "../../Images/work.png";
import star from "../../Images/star.png";
import language from "../../Images/language.png";
import { countriesFlag } from "../../Images/countryFlag";

import style from "./mentorCard.module.scss";

function MentorCard({ data, onClick, className = "" }) {
  return (
    <div className={`${style.cardContainer} ${className}`} onClick={onClick}>
      <div className={style.cardImageContainer}>
        <div className={style.tag}>{data.availability}</div>
        <img
          loading="lazy"
          alt=""
          className={style.cardImg}
          src={data?.mentordata?.mentor_image}
        />
      </div>
      <div className={style.nameContainer}>
        <div className={style.name}>{data.username}</div>
        <img
          className={style.countryFlag}
          alt=""
          src={countriesFlag[data?.country?.toLowerCase() || ""]}
        />
      </div>
      <div className={style.workContainer}>
        <img className={style.workIcon} alt="" src={work} />
        <div className={style.designation}>
          {data.designation} at {data.company_employed}
        </div>
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
        <div className={style.language}>{data.user_speaking_lang}</div>
      </div>
    </div>
  );
}

export default MentorCard;
