import React from "react";

import style from "./verticalDevider.module.scss";

function VerticalDevider({ color, height }) {
  return (
    <div
      className={style.verticalLine}
      style={{ background: `${color}`, height: `${height}` }}
    />
  );
}

export default VerticalDevider;
