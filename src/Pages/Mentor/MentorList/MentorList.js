import React, { useState, useEffect } from "react";
import Axios from "axios";

import style from "./mentorList.module.scss";
import globalStyle from "../../../global.module.scss";
import Mentor from "./Mentor/Mentor";
import CoFounder from "./CoFounder/CoFounder";

const MentorList = () => {
  const [tab, setTab] = useState("mentor");
  const [mentorList, setMentorList] = useState([]);

  useEffect(() => {
    Axios.get(`${Axios.defaults.baseURL}/mentor/mentorall`)
      .then((result) => {
        setMentorList(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      {tab === "mentor" ? (
        <Mentor mentorData={mentorList.data} />
      ) : (
        <CoFounder />
      )}
    </div>
  );
};

export default MentorList;
