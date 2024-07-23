import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Mentor from "./Mentor/Mentor";
import CoFounder from "./CoFounder/CoFounder";
import PageLoader from "../../../Components/PageLoader/PageLoader";
import Button from "../../../Components/Button/Button";

import style from "./mentorList.module.scss";
import globalStyle from "../../../global.module.scss";

const MentorList = () => {
  const [tab, setTab] = useState("mentor");
  const [mentorList, setMentorList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    Axios.get(`${Axios.defaults.baseURL}/mentor/mentorall`)
      .then((result) => {
        setLoading(false);
        setMentorList(result.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className={style.mentorContainer}>
      <div className={style.tabParentcontainer}>
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
        <Button
          text="Become Mentor"
          onClick={() => navigate("/becomeMentor")}
        />
      </div>
      {tab === "mentor" ? (
        <>
          {loading ? <PageLoader /> : <Mentor mentorData={mentorList.data} />}
        </>
      ) : (
        <CoFounder />
      )}
    </div>
  );
};

export default MentorList;
