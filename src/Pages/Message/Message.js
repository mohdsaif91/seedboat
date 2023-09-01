import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import leftArrow from "../../Images/icon/leftArrow.png";
import searchIcon from "../../Images/icon/search.png";
import ArrowDown from "../../Images/icon/arrowDown.png";

import style from "./message.module.scss";
import globalStyle from "../../global.module.scss";

function Message() {
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={style.messageContainer}>
      <div className={style.messageHeader}>
        <div className={style.dFlex}>
          <div className={style.leftConatiner}>
            <img src={leftArrow} alt="" onClick={() => navigate(-1)} />
            <label
              onClick={() => navigate(-1)}
              className={`${style.backLabel} ${globalStyle.headingPoppins}`}
            >
              Back
            </label>
          </div>
          <div className={style.leftConatiner}>
            <img src={searchIcon} className={style.searchIcon} />
            <input
              className={style.searchInput}
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={`${globalStyle.horizontalDevider} ${style.rmMargin}`} />
      </div>
      <div className={style.messageContainer}>
        <div className={style.peopleChat}>
          <label className={style.messageLabel}>All Message(08)</label>
          <img src={ArrowDown} className={style.arrowDownIcon} alt="" />
        </div>
        <div className={style.chatContainer}></div>
      </div>
    </div>
  );
}

export default Message;
