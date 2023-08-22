import React from "react";

import style from "./startUpCard.module.scss";

function StratUpCard({ data }) {
  return (
    <div className={style.startUpContainer}>
      <div className={style.nameContainer}>
        <div className={style.name}>{data.name}</div>
        <img className={style.countryFlag} alt="" src={data.countryFlag} />
      </div>
      <div className={style.investmentContainer}>
        <label className={style.startUpLabel}>Investment Size</label>
        <div className={style.startUpValue}>{data.investmentSize}</div>
      </div>
      <div className={style.investmentContainer}>
        <label className={style.startUpLabel}>Investment Experience</label>
        <div className={style.startUpValue}>{data.experince}</div>
      </div>
      <div className={style.investmentContainer}>
        <label className={style.startUpLabel}>Start-up Stage Preference</label>
        <div className={style.startUpValue}>{data.StartUpPreference}</div>
      </div>
    </div>
  );
}

export default StratUpCard;
