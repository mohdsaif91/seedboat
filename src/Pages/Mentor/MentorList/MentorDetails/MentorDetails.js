import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

import profileImage from "../../../../Images/Rectangle 200.png";
import India from "../../../../Images/india.png";
import work from "../../../../Images/work.png";
import message from "../../../../Images/icon/message.png";
import heart from "../../../../Images/icon/image 53.png";
import linkedIn from "../../../../Images/colorLinkedIn.png";
import twitter from "../../../../Images/colotTwitter.png";
import Review from "./Review/Review";
import Overview from "./OverView/Overview";
import Button from "../../../../Components/Button/Button";
import { useGetSingleMentorQuery } from "../../../../Redux/Service/Mentor";
import PageLoader from "../../../../Components/PageLoader/PageLoader";

import style from "./mentorDetails.module.scss";
import globalStyle from "../../../../global.module.scss";

function MentorDetails() {
  const [tab, setTab] = useState("Overview");
  const [mentorData, setMentorData] = useState();

  const { state } = useLocation();
  const navigate = useNavigate();

  // const [getSingleMentor] = useGetSingleMentorQuery();

  useEffect(() => {
    Axios.post(`${Axios.defaults.baseURL}mentor/mentor-individual`, {
      email: state.mentorId,
    })
      .then((res) => {
        setMentorData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if (isLoading) {
  //   return <PageLoader />;
  // }

  console.log(mentorData, " <>?");
  //
  return (
    <div className={style.mentorDetailsContainer}>
      <div className={`${style.mentorHeader} ${globalStyle.subHeadingPoppins}`}>
        <span className={style.mainName}>Mentors /</span> Pratik Bhalla
      </div>
      <div className={style.detailsContainer}>
        <div className={style.leftContainer}>
          <img
            src={mentorData?.mentor_image}
            alt=""
            className={style.profileImage}
          />
        </div>
        <div className={style.rightContainer}>
          <img src={India} alt="" className={style.countryFlag} />
          <div className={style.nameContainer}>
            <div className={style.nameItem}>
              <div
                className={`${style.mainName} ${globalStyle.headingPoppins}`}
              >
                Pratik Bhalla
              </div>
              <div className={style.designationContainer}>
                <img src={work} alt="" />
                <label
                  className={`${globalStyle.subHeadingPoppins} ${style.designation}`}
                >
                  Devloper at ABC
                </label>
              </div>
            </div>
            <div className={style.imageContainer}>
              <img src={message} alt="" className={style.messageIcon} />
              <img src={heart} alt="" className={style.messageIcon} />
              <Button
                text="View Profile"
                onClick={() => navigate("/mentorProfile")}
              />
            </div>
          </div>
          <div
            className={`${style.subMainText} ${globalStyle.subHeadingPoppins}`}
          >
            {mentorData?.user_message}
          </div>
          <div className={style.socialImageContainer}>
            <img src={linkedIn} alt="" className={style.socialIcon} />
            <img src={twitter} alt="" className={style.socialIcon} />
          </div>
        </div>
      </div>
      <div className={style.primaryContainer}>
        <div className={style.tabListContainer}>
          <div
            onClick={() => setTab("Overview")}
            className={`${style.tab} ${globalStyle.subHeadingPoppins} ${
              tab === "Overview" && style.active
            }`}
          >
            Overview
          </div>
          <div
            onClick={() => setTab("Reviews")}
            className={`${style.tab} ${globalStyle.subHeadingPoppins} ${
              tab === "Reviews" && style.active
            }`}
          >
            Reviews
          </div>
        </div>
        <div className={style.tabContainer}>
          {tab === "Reviews" ? <Review /> : <Overview />}
        </div>
      </div>
    </div>
  );
}

export default MentorDetails;
