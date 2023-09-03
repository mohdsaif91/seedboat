import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../../Images/icon/search.png";
import { filterList, serviceListCard } from "../../../util";
import ServiceCard from "../../../Components/Card/SeviceCard/ServiceCard";
import ContainerWithHeadingBtn from "../../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";

import style from "./serviceList.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

const data = [
  "country1",
  "country2",
  "country3",
  "country4",
  "country5",
  "country6",
];

function ServiceList() {
  const [search, setSearch] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [filter, setFIlter] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className={style.serviceProviderContainer}>
        <div className={`${style.pageHeading} ${globalStyle.headingPoppins}`}>
          Vivamus lacinia faucibus aliquam. Donec sodale srhoncus nisi.
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
              {["Location", "Price"].map((m) => (
                <li
                  onClick={(e) =>
                    setSelectedLink(e.target.value === selectedLink ? "" : m)
                  }
                  className={`${commonStyle.linkItem} ${
                    commonStyle.linkMargin
                  } ${selectedLink === m && commonStyle.linkActive}`}
                >
                  <label className={commonStyle.linkLabel}>{m}</label>
                  {m === selectedLink ? (
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
              data.map((m, i) => (
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
        <div className={style.serviceListContainer}>
          {serviceListCard.map((m, i) => (
            <ServiceCard
              SecondaryBtnCLick={() => navigate("/serviceDetials")}
              primaryBtnClick={() => console.log()}
              cardHeading={m.companyName}
              subHeading={m.subHeading}
              companyLogo={m.companyLogo}
              companyWork={m.workType}
              key={i}
            />
          ))}
        </div>
      </div>
      <ContainerWithHeadingBtn
        className={style.rmMargin}
        heading="Want to add your
      company here ?"
        onClick={() => console.log()}
        btnText="Register Now"
      />
    </>
  );
}

export default ServiceList;
