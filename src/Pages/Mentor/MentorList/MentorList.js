import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Mentor from "./Mentor/Mentor";
import CoFounder from "./CoFounder/CoFounder";
import PageLoader from "../../../Components/PageLoader/PageLoader";
import Button from "../../../Components/Button/Button";

import style from "./mentorList.module.scss";
import globalStyle from "../../../global.module.scss";
import { useGetAllMentorQuery } from "../../../Redux/Service/Mentor";

const MentorList = () => {
  const [tab, setTab] = useState("mentor");
  const [mentorList, setMentorList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [navigation, setNavigation] = useState(1);

  const navigate = useNavigate();

  const { isLoading, data: MentorData } = useGetAllMentorQuery(navigation);

  // useEffect(() => {
  //   setLoading(true);
  //   Axios.get(`${Axios.defaults.baseURL}mentor/mentorall/10/${navigation}`)
  //     .then((result) => {
  //       setLoading(false);
  //       setMentorList(result.data);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // }, [navigation]);

  if (isLoading) {
    return <PageLoader />;
  }

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
        <Mentor
          nextPage={() => setNavigation((state) => state + 1)}
          prevPage={() => navigation > 1 && setNavigation((state) => state - 1)}
          mentorData={MentorData}
        />
      ) : (
        <CoFounder />
      )}
    </div>
  );
};

export default MentorList;
