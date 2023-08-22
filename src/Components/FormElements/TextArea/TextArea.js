import React from "react";

import style from "./textArea.module.scss";
import globalStyle from "../../../global.module.scss";

function TextArea({ className, name, onChange, value, placeHolder }) {
  return (
    <textarea
      placeholder={placeHolder}
      className={`${style.textArea} ${className} ${globalStyle.headingPoppins}`}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextArea;
