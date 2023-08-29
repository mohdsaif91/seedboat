import React from "react";

import profileBackground from "../../Images/profileBackground.png";
import profileImageDefault from "../../Images/profileImage.png";
import editProfile from "../../Images/editProfile.png";
import { BtnRect } from "../Button/Button";

import style from "./profileHeader.module.scss";
import globalStyle from "../../global.module.scss";

function ProfileHeader({
  editOnClick,
  backGroundImage = "",
  profileImage = "",
  positionAt = "",
  name = "",
}) {
  return (
    <div className={style.profileDetialsContainer}>
      <img
        className={style.backgroundImage}
        alt=""
        src={backGroundImage === "" ? profileBackground : backGroundImage}
      />
      <div className={style.backgroundImageSecondary}>
        <div className={style.profileImageAndNameContainer}>
          <div className={style.profileImageContainer}>
            <img
              className={style.profileImage}
              alt=""
              src={profileImage === "" ? profileImageDefault : profileImage}
            />
            <div className={style.editProfileParent} onClick={editOnClick}>
              <img className={style.editProfile} alt="" src={editProfile} />
            </div>
          </div>
          <div className={style.profileTextContainer}>
            <div
              className={`${style.profileHeading} ${globalStyle.headingPoppins}`}
            >
              {name}
            </div>
            <div className={style.profileSubHeading}>{positionAt}</div>
          </div>
        </div>
        <BtnRect
          className={style.editProfileBtn}
          color="#fff"
          bgColor="#1F80A3"
          text="Edit Profile"
          border={true}
          borderColor="#fff"
        />
      </div>
    </div>
  );
}

export default ProfileHeader;
