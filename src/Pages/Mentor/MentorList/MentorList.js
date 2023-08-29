import React, { useState } from "react";

import style from "./mentorList.module.scss";
import globalStyle from "../../../global.module.scss";
import Mentor from "./Mentor/Mentor";
import CoFounder from "./CoFounder/CoFounder";

function MentorList() {
  const [tab, setTab] = useState("mentor");
  return (
    <div className={style.mentorContainer}>
      <div className={style.tabContainer}>
        <div
          onClick={() => setTab("mentor")}
          className={`${style.tab} ${globalStyle.headingPoppins}`}
        >
          Mentor
          {tab === "mentor" && <div className={style.tabActive} />}
        </div>
        <div
          onClick={() => setTab("coFounder")}
          className={`${style.tab} ${globalStyle.headingPoppins} `}
        >
          Co Founder
          {tab === "coFounder" && <div className={style.tabActive} />}
        </div>
      </div>
      {tab === "mentor" ? <Mentor /> : <CoFounder />}
    </div>
  );
}

export default MentorList;
