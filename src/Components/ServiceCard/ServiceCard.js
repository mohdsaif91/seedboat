import React from "react";

import style from "./serviceCard.module.scss";

function ServiceCard({ data, colorType }) {
  return (
    <div
      className={`${style.serviceCardContainer}`}
      style={{
        background:
          colorType === 0
            ? "rgba(92, 73, 244, 0.10)"
            : colorType === 1
            ? "rgba(244, 73, 139, 0.10)"
            : "rgba(244, 199, 73, 0.10)",
      }}
    >
      <img alt="" src={data.img} />
      <div className={style.text}>{data.text}</div>
      <div className={style.subText}>{data.subText}</div>
    </div>
  );
}

export default ServiceCard;
