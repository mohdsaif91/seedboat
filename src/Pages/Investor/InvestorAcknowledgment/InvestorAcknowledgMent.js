import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BlackBtn } from "../../../Components/Button/Button";

import style from "./InvestorAcknowledgMent.module.scss";

function InvestorAcknowledgMent() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, " ");
  return (
    <div className={style.acknowledgementContainer}>
      <div className={style.pageHeading}>
        Hello, {state?.investorData?.fname} {state?.investorData?.lname}
        <br /> You are all completed start browsing for best start-ups.
      </div>
      <div className={style.pageSubHeading}>
        Curabitur mollis consectetur tortor. Proin at ornare dolor. Mauris
        lacinia, sem eu dictum tristique, lectus dui malesuada mi, sit amet
        mollis nulla quam a dui. Ut volutpat et ipsum vitae ullamcorper. Etiam
        auctor quis justo ac aliquet. Maecenas fringilla massa id aliquam
        luctus. Cras vitae finibus sem. Phasellus fermentum aliquam gravida.
      </div>
      <BlackBtn
        className={style.ackBtn}
        withIcon={false}
        onClick={() => navigate("/investmentExploer")}
        text="Start Exploring"
      />
    </div>
  );
}

export default InvestorAcknowledgMent;
