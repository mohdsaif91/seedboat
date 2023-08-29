import React from "react";

import style from "./step.module.scss";

function Step({ page, totalSteps = [] }) {
  return (
    <div className={style.stepContainer}>
      {totalSteps.map((m) => (
        <div className={style.step}>
          {page === m && <label className={style.stepLabel}>Step {m}</label>}
          <div
            className={`${style.stepItem} ${page === m && style.active} ${
              page > m && style.underLine
            }`}
          />
        </div>
      ))}

      {/* <div className={style.step}>
        <label className={style.stepLabel}>{page === 1 && "Step 2"}</label>
        <div
          className={`${style.stepItem} ${page === 1 && style.active} ${
            page > 1 && style.underLine
          }`}
        />
      </div>
      <div className={style.step}>
        {page === 2 && <label className={style.stepLabel}>Step 3</label>}
        <div className={`${style.stepItem} ${page === 2 && style.active}`} />
      </div> */}
    </div>
  );
}

export default Step;
