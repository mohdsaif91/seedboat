import React from "react";

import style from "../PageLoader/pageLoader.module.scss";

function PageLoader() {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader} />
    </div>
  );
}

export default PageLoader;
