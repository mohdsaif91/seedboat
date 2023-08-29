import React, { useState } from "react";

import SearchIcon from "../../../../Images/icon/search.png";
import Filter from "../../../../Images/icon/filter.png";

import style from "./mentor.module.scss";
import globalStyle from "../../../../global.module.scss";
import commonStyle from "../../../../common.module.scss";
import Button from "../../../../Components/Button/Button";
import { mentorFilterlist, mentorListData } from "../../../../util";
import rightBtnArrow from "../../../../Images/icon/rightBtnArrow.png";
import leftbtnArrow from "../../../../Images/icon/leftBrnArrow.png";
import MentorCard from "../../../../Components/MentorCard/MentorCard";
import ContainerWithHeadingBtn from "../../../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";
import { useNavigate } from "react-router-dom";

function Mentor() {
  const [search, setSearch] = useState("");
  const [mentorTab, setMentorTab] = useState("");

  const navigate = useNavigate();

  return (
    <div className={style.mentorListContainer}>
      <div className={commonStyle.investmentheader}>
        <div
          className={`${commonStyle.inputContainer} ${style.inputContainer}`}
        >
          <img alt="" className={commonStyle.SearchIcon} src={SearchIcon} />
          <input
            placeholder="Search by role, company, name"
            className={`${commonStyle.headerSearch} ${style.searchInput}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className={`${style.mentorBtn} ${globalStyle.headingPoppins}`}>
          <img src={Filter} alt="" className={style.searchFilterIcon} />
          Filter
        </button>
      </div>
      <div className={style.mentorsContainer}>
        <div className={style.mentortpeFilterContainer}>
          <img src={leftbtnArrow} alt="" className={style.leftBtnIcon} />
          {mentorFilterlist.map((m) => (
            <div
              onClick={() => setMentorTab(m)}
              className={`${style.mentorListItem} ${
                mentorTab === m && style.active
              } ${globalStyle.subHeadingPoppins}`}
            >
              {m}
            </div>
          ))}
          <img src={rightBtnArrow} alt="" className={style.leftBtnIcon} />
        </div>
        <div
          className={`${commonStyle.linkDropDownContainer} ${style.cardContainer}`}
        >
          {mentorListData.map((m, i) => (
            <>
              <MentorCard
                className={style.mentorCardItem}
                data={m}
                onClick={() => navigate("/mentorDetails")}
              />
              {(i + 1) % 4 === 0 && i !== 0 && (
                <div className={globalStyle.break} />
              )}
            </>
          ))}
        </div>
        <div className={style.btnContainer}>
          <button className={style.loadMorebtn}>LOAD MORE MENTORS</button>
        </div>
        <ContainerWithHeadingBtn
          headingClass={style.bottomHeading}
          heading="Would you like to be a investor along with being a mentor"
          subHeading="Would you like to be a Investor along with being a
          Mentor/Co-founder"
          btnText="Join us as Investor"
          rectBtn={true}
          fullWidth={true}
          onClick={() => console.log()}
        />
      </div>
    </div>
  );
}

export default Mentor;
