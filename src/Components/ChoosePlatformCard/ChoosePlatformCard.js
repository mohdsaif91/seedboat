import React from "react";

import style from "./choosePlatformCard.module.scss";

function ChoosePlatformCard({ data }) {
  return (
    <div className={style.choosePlatformContainer}>
      <img src={data.img} alt="" className={style.platformImg} />
      <div className={style.platformHeading}>{data.text}</div>
      <div className={style.platformSubHeading}>{data.subText}</div>
    </div>
  );
}

export default ChoosePlatformCard;
