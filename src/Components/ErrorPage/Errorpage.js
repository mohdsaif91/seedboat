import React from "react";

import style from "./errorPage.module.scss";

function Errorpage({ errorMessage, tryAgain }) {
  return (
    <div className={style.errorContainer}>
      {errorMessage}
      <button onClick={tryAgain}>Try Again</button>
    </div>
  );
}

export default Errorpage;
