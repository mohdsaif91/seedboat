import React from "react";

import calender from "../../../../Images/icon/calender.png";
import service from "../../../../Images/icon/service.png";

import style from "./step5.module.scss";

function Step5() {
  return (
    <div className={style.step5Container}>
      <div className={style.itemContainer}>
        <img src={calender} alt="" className={style.itemIcon} />
        <div className={style.textContainer}>
          <div className={style.mainText}>
            Vivamus lacinia faucibus aliquam.{" "}
          </div>
          <div className={style.subText}>
            Donec sodales rhoncus nisi, eget ullamcorper sem convallis id.
            Quisque eleifend augue non lectus.
          </div>
        </div>
      </div>
      <div className={style.itemContainer}>
        <img src={service} alt="" className={style.itemIcon} />
        <div className={style.textContainer}>
          <div className={style.mainText}>
            Vivamus lacinia faucibus aliquam.
          </div>
          <div className={style.subText}>
            Donec sodales rhoncus nisi, eget ullamcorper sem convallis id.
            Quisque eleifend augue non lectus.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
