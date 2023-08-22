import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import Button from "../Button/Button";

import style from "./donateCard.module.scss";

function DonateCard({ data }) {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${data.percentage}%`,
    backgroundColor: "#1f80a3",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const labelNumberCount = {
    position: "relative",
    top: "16px",
  };
  return (
    <div className={style.card}>
      <img className={style.cardImg} src={data.img} alt="" />
      <div className={style.cardData}>
        <div className={style.cardTitile}>{data.text}</div>
        <p className={style.cardSubtext}>{data.subText}</p>
        <div className={style.numberContainer}>
          <div className={style.valueContainer}>
            <div className={style.cardLabel}>Current</div>
            <div className={style.cardValue}>{data.current}</div>
          </div>
          <div className={style.border} />
          <div className={style.valueContainer}>
            <div className={style.cardLabel}>Target</div>
            <div className={style.cardValue}>{data.target}</div>
          </div>
          <div className={style.border} />
          <div className={style.valueContainer}>
            <div className={style.cardLabel}>Donors</div>
            <div className={style.cardValue}>{data.donor}</div>
          </div>
        </div>
        <div className={style.percentageContainer}>
          <div style={containerStyles}>
            <div style={fillerStyles}>
              <span style={labelStyles}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle cx="8" cy="8" r="8" fill="#1F80A3" />
                  <circle cx="7.99996" cy="8.00008" r="5.33333" fill="white" />
                </svg>
              </span>
              <span style={labelNumberCount}>{`${data.percentage}%`}</span>
            </div>
          </div>
        </div>
        <div className={style.donatebtnContainer}>
          <Button className={style.donateBtn} text="Donate Now" />
        </div>
      </div>
    </div>
  );
}

export default DonateCard;
