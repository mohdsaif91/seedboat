import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  exploreCard,
  filterList,
  investmentExploreNavData,
} from "../../../util";
import SearchIcon from "../../../Images/icon/search.png";
import SlideBtn from "../../../Components/SlideButton/SlideBtn";
import InvestCard from "../../../Components/Card/InvestMentCard/InvestCard";
import { WhiteRoundBtn } from "../../../Components/Button/Button";

import style from "./investmentOpportuinites.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

function InvestmentOpportunities() {
  const [selectedLink, setSelectedLink] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFIlter] = useState("Most Funded");

  const navigate = useNavigate();

  const getSecondaryLink = () =>
    investmentExploreNavData.find((f) => f.text === selectedLink);
  console.log(selectedLink);
  return (
    <div className={style.investmentOppContainer}>
      <div className={globalStyle.pageHeading}>Investment opportunities</div>
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
            {investmentExploreNavData.map((m) => (
              <li
                onClick={(e) =>
                  setSelectedLink(e.target.value === selectedLink ? "" : m.text)
                }
                className={`${commonStyle.linkItem} ${commonStyle.linkMargin} ${
                  selectedLink === m.text && commonStyle.linkActive
                }`}
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
      <div className={style.topPickContainer}>
        <div className={style.topPickContainerHeader}>
          <label
            className={`${globalStyle.pageHeading} ${style.topPickHeading}`}
          >
            Top Picks for you
          </label>
          <SlideBtn className={style.bottomBtnService} />
        </div>
        <div className={style.topPickCards}>
          {exploreCard.topPick.map((m) => (
            <InvestCard data={m} topPickCard={true} />
          ))}
        </div>
      </div>
      <div className={style.topPickContainer}>
        <div className={style.topPickContainerHeader}>
          <label
            className={`${globalStyle.pageHeading} ${style.topPickHeading}`}
          >
            Trending Now
          </label>
          <SlideBtn className={style.bottomBtnService} />
        </div>
        <div className={style.topPickCards}>
          {exploreCard.treandingNow.map((m) => (
            <InvestCard data={m} topPickCard={false} />
          ))}
        </div>
      </div>
      <div className={style.topPickContainer}>
        <div className={style.topPickContainerHeader}>
          <label
            className={`${globalStyle.pageHeading} ${style.topPickHeading}`}
          >
            Top Picks for you
          </label>
          <SlideBtn className={style.bottomBtnService} />
        </div>
        <div className={style.topPickCards}>
          {exploreCard.recentlyFunded.map((m) => (
            <InvestCard data={m} />
          ))}
        </div>
      </div>
      <div className={style.becomeInvestorContainer}>
        <div className={style.becomeHeadingContainer}>
          <div
            className={`${globalStyle.pageHeading} ${style.becomePageHeading}`}
          >
            Become an investor today
          </div>
          <div
            className={`${style.subHeadingBecome} ${globalStyle.subHeadingPoppins}`}
          >
            Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, orem is
            simply free text quis bibendum. Lorem Ipsum velit auctor aliquet.
            Cras dictum. Lorem Ipsum velit auctor aliquet.
          </div>
        </div>
        <WhiteRoundBtn
          text="Become Investor"
          onClick={() => navigate("/investorProfile")}
        />
      </div>
    </div>
  );
}

export default InvestmentOpportunities;
