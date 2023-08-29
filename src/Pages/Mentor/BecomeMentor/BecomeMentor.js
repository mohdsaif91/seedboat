import React, { useState } from "react";

import Button from "../../../Components/Button/Button";
import mento1 from "../../../Images/mentor1.png";
import mento2 from "../../../Images/mentor2.png";
import mento3 from "../../../Images/mentor3.png";
import SearchIcon from "../../../Images/icon/search.png";
import {
  becomeMentorCardData,
  filterList,
  mentorExploreNavData,
  questionList,
} from "../../../util";
import SlideBtn from "../../../Components/SlideButton/SlideBtn";
import heroMentor from "../../../Images/heroMentor.png";

import style from "./becomeMentor.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";
import { useNavigate } from "react-router-dom";

const mentorCardData = [
  {
    img: mento1,
    name: "Randolph Alvarez",
    post: "Mentor/CTO",
  },
  {
    img: mento2,
    name: "Gloria Elledge",
    post: "Mentor/Marketing Analyst",
  },
  {
    img: mento3,
    name: "Violet Brown",
    post: "Mentor/Influencer",
  },
];

function BecomeMentor() {
  const [selectedLink, setSelectedLink] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFIlter] = useState("Most Funded");

  const navigate = useNavigate();

  const getSecondaryLink = () =>
    mentorExploreNavData.find((f) => f.text === selectedLink);
  return (
    <div className={style.becomeMentorContainer}>
      <div className={style.heroContainer}>
        <div className={style.heroImg} />
        <div className={style.heroTextContainer}>
          <div className={`${style.mainText} ${globalStyle.headingPoppins}`}>
            Your next chapter,
            <br />
            <span className={style.highlight}>made possible</span> by Mentoring
          </div>
          <Button
            onClick={() => navigate("/becomeMentorSteps")}
            text="Become a Mentor"
            className={style.becomeMentorBtn}
          />
        </div>
      </div>
      <div className={style.primaryContainer}>
        <div className={style.primaryHeader}>
          <div
            className={`${style.primaryMainHeading} ${globalStyle.headingPoppins}`}
          >
            Mentoring can help you turn your
            <br />
            <span className={style.highlight}>passion into conversations,</span>
            friendships and network globally.
          </div>
          <Button className={style.discoverMentor} text="Discover Mentors" />
        </div>
        <div className={style.primaryCardContainer}>
          {mentorCardData.map((m) => (
            <div className={style.mentorCard}>
              <img src={m.img} alt="" className={style.mentoraImage} />
              <div
                className={`${style.mentorName} ${globalStyle.headingPoppins}`}
              >
                {m.name}
              </div>
              <div
                className={`${style.mentorPost} ${globalStyle.subHeadingPoppins}`}
              >
                {m.post}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.secondaryContainer}>
        <div className={style.primaryHeader}>
          <div
            className={`${style.secondaryMainHeading} ${globalStyle.headingPoppins}`}
          >
            Join us.
            <br /> Nulla tempor at dolor eget finibus.
          </div>
          <Button
            className={style.discoverMentor}
            onClick={() => navigate("/becomeMentorSteps")}
            text="Become a Mentor"
          />
        </div>
        <div className={commonStyle.investmentheader}>
          <div className={commonStyle.inputContainer}>
            <img alte="" className={commonStyle.SearchIcon} src={SearchIcon} />
            <input
              placeholder="Start typing to search"
              className={commonStyle.headerSearch}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={commonStyle.headerSecondaryContainer}>
            <ul className={commonStyle.linkContainer}>
              {mentorExploreNavData.map((m) => (
                <li
                  onClick={(e) =>
                    setSelectedLink(
                      e.target.value === selectedLink ? "" : m.text
                    )
                  }
                  className={`${commonStyle.linkItem} ${
                    commonStyle.linkMargin
                  } ${selectedLink === m.text && commonStyle.linkActive}`}
                >
                  <label className={commonStyle.linkLabel}>{m.text}</label>
                  {m.text === selectedLink ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <path
                        d="M5.93301 0.749999C5.74056 0.416666 5.25944 0.416667 5.06699 0.75L0.303846 9C0.111397 9.33333 0.351959 9.75 0.736859 9.75H10.2631C10.648 9.75 10.8886 9.33333 10.6962 9L5.93301 0.749999Z"
                        fill="black"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <path
                        d="M5.93301 9.25C5.74056 9.58333 5.25944 9.58333 5.06699 9.25L0.303846 0.999999C0.111397 0.666666 0.351959 0.25 0.736859 0.25H10.2631C10.648 0.25 10.8886 0.666667 10.6962 1L5.93301 9.25Z"
                        fill="#AEAEAE"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
            <div className={style.verticalDevider}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="33"
                viewBox="0 0 2 33"
                fill="none"
              >
                <path
                  d="M2 1C2 0.447716 1.55228 -2.41411e-08 0.999999 0C0.447714 2.41411e-08 -1.4229e-06 0.447716 -1.39876e-06 1L2 1ZM2 33L2 1L-1.39876e-06 1L0 33L2 33Z"
                  fill="#AEAEAE"
                />
              </svg>
            </div>
            <div className={commonStyle.filterContainer}>
              <label className={`${commonStyle.linkItem}`}>
                Sort by :
                <select
                  className={`${commonStyle.filterDropDown} ${commonStyle.linkItem}`}
                  defaultValue={filter}
                >
                  {filterList.map((m, i) => (
                    <option
                      key={i}
                      onClick={(e) => setFIlter(e.tarteg.value)}
                      value={m}
                    >
                      {m}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`${commonStyle.linkDropDownParentContainer} ${
            selectedLink === "" ? globalStyle.disNone : globalStyle.disblock
          }`}
        >
          <div className={commonStyle.linkDropDownContainer}>
            {selectedLink !== "" &&
              getSecondaryLink().secondaryLink.map((m, i) => (
                <>
                  <a
                    key={i}
                    onClick={() => console.log(m)}
                    className={`${commonStyle.secondaryLinkItem} ${globalStyle.subHeadingPoppins}`}
                  >
                    {m}
                  </a>
                  {i === 3 && <div className={globalStyle.break} />}
                </>
              ))}
          </div>
        </div>
        <div className={style.mentorCardsContainer}>
          {becomeMentorCardData.map((m, i) => (
            <>
              <div className={style.mentorCard}>
                <div
                  className={`${style.mentorName} ${globalStyle.headingPoppins}`}
                >
                  {m.name}
                </div>
                <div className={style.twoLabelContainer}>
                  <div className={style.innerContainer}>
                    <div
                      className={`${style.mentorLabel} ${globalStyle.subHeadingPoppins}`}
                    >
                      We Need
                    </div>
                    <div
                      className={`${style.mentorvalue} ${globalStyle.headingPoppins}`}
                    >
                      {m.weNeed}
                    </div>
                  </div>
                  <div className={style.innerContainer}>
                    <div
                      className={`${style.mentorLabel} ${globalStyle.subHeadingPoppins}`}
                    >
                      Primary expertise
                    </div>
                    <div
                      className={`${style.mentorvalue} ${globalStyle.headingPoppins}`}
                    >
                      {m.primaryExpertise}
                    </div>
                  </div>
                </div>
                <div className={style.twoLabelContainer}>
                  <div className={style.innerContainer}>
                    <div
                      className={`${style.mentorLabel} ${globalStyle.subHeadingPoppins}`}
                    >
                      Experience{" "}
                    </div>
                    <div
                      className={`${style.mentorvalue} ${globalStyle.headingPoppins}`}
                    >
                      {m.experience}
                    </div>
                  </div>
                  <div className={style.innerContainer}>
                    <div
                      className={`${style.mentorLabel} ${globalStyle.subHeadingPoppins}`}
                    >
                      Time duration
                    </div>
                    <div
                      className={`${style.mentorvalue} ${globalStyle.headingPoppins}`}
                    >
                      {m.timeDuration}
                    </div>
                  </div>
                </div>
                <div className={style.twoLabelContainer}>
                  <div className={style.innerContainer}>
                    <div
                      className={`${style.mentorLabel} ${globalStyle.subHeadingPoppins}`}
                    >
                      Compensation{" "}
                    </div>
                    <div
                      className={`${style.mentorvalue} ${globalStyle.headingPoppins}`}
                    >
                      {m.compensation}
                    </div>
                  </div>
                  <div className={style.innerContainer}>
                    <div
                      className={`${style.mentorLabel} ${globalStyle.subHeadingPoppins}`}
                    >
                      Location
                    </div>
                    <div
                      className={`${style.mentorvalue} ${globalStyle.headingPoppins}`}
                    >
                      {m.location}
                    </div>
                  </div>
                </div>
              </div>
              {i === 2 && <div className={globalStyle.break} />}
            </>
          ))}
        </div>
        <SlideBtn />
      </div>
      <div className={style.questionAnswerContainer}>
        <div className={style.leftContainer}>
          <div className={`${style.mainHeading} ${globalStyle.headingPoppins}`}>
            Common Questions
          </div>
          <div
            className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
          >
            Some questions asked by the members of our community
          </div>
        </div>
        <ul className={style.rightContainer}>
          {questionList.map((m) => (
            <li className={style.questionItem}>
              <div
                className={`${style.questionText} ${globalStyle.headingPoppins}`}
              >
                {m}
              </div>
              <div className={style.iconContainer}>+</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BecomeMentor;
