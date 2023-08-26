import React, { useState } from "react";

import style from "./plan.module.scss";
import parentStyle from "../startUp.module.scss";
import globalStyle from "../../../global.module.scss";
import { Input } from "../../../Components/FormElements/Input/Input";
import Button, { BtnRect } from "../../../Components/Button/Button";

const initailPlanData = {
  mileStone: [""],
  pitchLink: [""],
};

function Plan() {
  const [planData, setPlanData] = useState({ ...initailPlanData });
  const [inputData, setInputData] = useState({ milestone: "", pitchLink: "" });
  return (
    <div className={style.planContainer}>
      <div
        className={`${parentStyle.pageHeading} ${globalStyle.headingPoppins}`}
      >
        Plan and manage your project’s finances.
      </div>
      <div className={parentStyle.formContainer}>
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Funding goal
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Goal amount
            </div>
            {planData.mileStone.map((m, i) => (
              <Input
                withSymbol={true}
                symbol="$"
                placeHolder="Eg. Pellentesque vitae pulvinar purus."
                fullWidth={true}
                value={m}
                onChange={(e) => {
                  planData.mileStone[i] = e.target.value;
                  setPlanData({
                    ...planData,
                  });
                }}
                className={parentStyle.basicInput}
              />
            ))}
            <button
              className={`${style.planBtn} ${globalStyle.headingPoppins}`}
              onClick={() => {
                setPlanData({
                  ...planData,
                  mileStone: [...planData.mileStone, ""],
                });
              }}
            >
              <div className={style.btnIcon}>+</div>
              Add next Milestone
            </button>
          </div>
        </div>
        <div
          className={`${parentStyle.formItemContainer} ${style.fomrItemMargin}`}
        >
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Funding goal
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Links for Pitch Deck
            </div>
            {planData.pitchLink.map((m, i) => (
              <Input
                withSymbol={true}
                symbol="$"
                placeHolder="Eg. Pellentesque vitae pulvinar purus."
                fullWidth={true}
                value={m}
                onChange={(e) => {
                  planData.pitchLink[i] = e.target.value;
                  setPlanData({
                    ...planData,
                  });
                }}
                className={parentStyle.basicInput}
              />
            ))}
            <button
              className={`${style.planBtn} ${globalStyle.headingPoppins}`}
              onClick={() => {
                setPlanData({
                  ...planData,
                  pitchLink: [...planData.pitchLink, ""],
                });
              }}
            >
              <div className={style.btnIcon}>+</div>
              Add another link
            </button>
          </div>
        </div>
        <div className={parentStyle.btnContainer}>
          <Button
            text="Next"
            className={parentStyle.basicNextBtn}
            onClick={() => console.log()}
          />
        </div>
      </div>
    </div>
  );
}

export default Plan;
