import React from "react";

import mentor from "../../../../../Images/icon/image 50.png";
import cto from "../../../../../Images/icon/image 51.png";
import projectManager from "../../../../../Images/icon/image 52.png";

import style from "./overview.module.scss";
import globalStyle from "../../../../../global.module.scss";
import Button from "../../../../../Components/Button/Button";
import { mentorsData } from "../../../../../util";
import MentorCard from "../../../../../Components/MentorCard/MentorCard";

function Overview() {
  return (
    <div className={style.overviewContainer}>
      <div className={style.overViewItem}>
        <div className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}>
          Can be
        </div>
        <div className={style.itemContainer}>
          <div
            className={`${style.item} ${style.colorItem}`}
            style={{ backgroundColor: "#F8EBC5" }}
          >
            <img src={mentor} alt="" className={style.itemIcon} />
            <label className={style.colorLabel}>Mentor</label>
          </div>
          <div
            className={`${style.item} ${style.colorItem}`}
            style={{ backgroundColor: "#C5E6F8" }}
          >
            <img src={cto} alt="" className={style.itemIcon} />
            <label className={style.colorLabel}>Cheif Technical Officer</label>
          </div>
          <div
            className={`${style.item} ${style.colorItem}`}
            style={{ backgroundColor: "#C5F8E4" }}
          >
            <img src={projectManager} alt="" className={style.itemIcon} />
            <label className={style.colorLabel}>Project Manager</label>
          </div>
        </div>
      </div>
      <div className={`${style.overViewItem} ${style.additionalContainer}`}>
        <div className={style.extraRighttMargin}>
          <div
            className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}
          >
            School
          </div>
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>GHY University</label>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}
          >
            Experience
          </div>
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>3 Years</label>
            </div>
          </div>
        </div>
      </div>
      <div className={style.overViewItem}>
        <div className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}>
          Expertise
        </div>
        <div className={style.itemContainer}>
          <div className={style.item}>
            <label>E-commerce</label>
          </div>
          <div className={style.item}>
            <label>Marketing</label>
          </div>
          <div className={style.item}>
            <label>Branding</label>
          </div>
          <div className={style.item}>
            <label>Marketing</label>
          </div>
          <div className={style.item}>
            <label>Branding</label>
          </div>
        </div>
      </div>
      <div className={style.overViewItem}>
        <div className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}>
          Industries
        </div>
        <div className={style.itemContainer}>
          <div className={style.item}>
            <label>Techical</label>
          </div>
          <div className={style.item}>
            <label>Managment</label>
          </div>
          <div className={style.item}>
            <label>Techical</label>
          </div>
          <div className={style.item}>
            <label>Managment</label>
          </div>
        </div>
      </div>
      <div className={style.overViewItem}>
        <div className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}>
          Fluent in
        </div>
        <div className={style.itemContainer}>
          <div className={style.item}>
            <label>English</label>
          </div>
          <div className={style.item}>
            <label>Hindi</label>
          </div>
          <div className={style.item}>
            <label>Spanish</label>
          </div>
        </div>
      </div>
      <div className={style.overViewItem}>
        <div className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}>
          Skills
        </div>
        <div className={style.itemContainer}>
          <div className={style.item}>
            <label>Managment</label>
          </div>
          <div className={style.item}>
            <label>Leadership</label>
          </div>
          <div className={style.item}>
            <label>Managment</label>
          </div>
          <div className={style.item}>
            <label>Leadership</label>
          </div>
        </div>
      </div>
      <div className={`${style.overViewItem} ${style.extraContainer}`}>
        <div>
          <div
            className={`${style.overViewLabel} ${globalStyle.headingPoppins}`}
          >
            Time Commitment
          </div>
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>Full Time</label>
            </div>
            <div className={style.item}>
              <label>Part Time</label>
            </div>
          </div>
        </div>
        <Button className={style.contactUsBtn} text="Contact Us" />
      </div>
      <div className={style.someMentorList}>
        <div className={`${style.mentorHeading} ${globalStyle.headingPoppins}`}>
          Similar Mentors
        </div>
        <div className={style.mentorContainer}>
          {mentorsData.map((m) => (
            <MentorCard data={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
