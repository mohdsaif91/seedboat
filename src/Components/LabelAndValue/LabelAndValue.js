import React from "react";

import style from "./labelAndValue.module.scss";
import globalStyle from "../../global.module.scss";

function LabelAndValue({ change = false, label, value }) {
  return (
    <div className={style.container}>
      <div>
        <label className={`${style.label} ${globalStyle.subHeadingPoppins}`}>
          {label}
        </label>
        <div className={`${style.value} ${globalStyle.headingPoppins}`}>
          {value}
        </div>
      </div>
      {change && <a className={style.profileChangeLink}>Change</a>}
    </div>
  );
}

export default LabelAndValue;
