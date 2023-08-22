import React from "react";

import style from "./headingAndSubHeading.module.scss";

function HeadingAndSubHeading({ heading, subHeading, userName = "" }) {
  return (
    <div className={style.headingSubHeadingContainer}>
      <div className={style.heading}>
        Hello,{userName}
        <br />
        {heading}
      </div>
      <div className={style.subHeading}>{subHeading}</div>
    </div>
  );
}

export default HeadingAndSubHeading;
