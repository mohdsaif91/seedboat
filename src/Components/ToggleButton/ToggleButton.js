import React from "react";

import style from "./toggleButton.module.scss";

function ToggleButton({ toggle, onChange }) {
  return (
    <label className={style.toggleContainer}>
      <input
        className={style.toggleInput}
        type="checkbox"
        defaultChecked={toggle}
        onClick={onChange}
      />
      <span />
    </label>
  );
}

export default ToggleButton;
