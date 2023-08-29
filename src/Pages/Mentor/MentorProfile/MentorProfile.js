import React, { useState } from "react";

import ProfileHeader from "../../../Components/ProfileHeader/ProfileHeader";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Saved from "./PersonalInformation/PersonalInformation";
import Message from "./Message/Message";

import style from "./mentorProfile.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

function MentorProfile() {
  const [profileTab, setProfileTab] = useState("Personal Information");

  const getTab = () => {
    switch (true) {
      case profileTab === "Personal Information":
        return <PersonalInformation />;
      case profileTab === "Saved":
        return <Saved />;
      case profileTab === "Message":
        return <Message />;
      default:
        return <Message />;
    }
  };
  return (
    <div className={style.mentorProfileContainer}>
      <ProfileHeader
        backGroundImage=""
        profileImage=""
        name="Marshall Ortega"
        positionAt="UI Designer at ABC"
        editOnClick={() => console.log()}
      />
      <div
        className={`${commonStyle.profilePageContainer} ${style.removeBottomPadding}`}
      >
        <div className={commonStyle.btnContainer}>
          <div
            onClick={() => setProfileTab("Personal Information")}
            className={`${globalStyle.investmentTag} ${
              globalStyle.headingPoppins
            } ${commonStyle.tabButtons} ${
              profileTab === "Personal Information" && commonStyle.tabActive
            }`}
          >
            Personal Information
          </div>
          <div
            onClick={() => setProfileTab("Saved")}
            className={`${globalStyle.investmentTag} ${
              globalStyle.headingPoppins
            } ${commonStyle.tabButtons} ${
              profileTab === "Saved" && commonStyle.tabActive
            }`}
          >
            Saved
          </div>
          <div
            onClick={() => setProfileTab("Messages")}
            className={`${globalStyle.investmentTag} ${
              globalStyle.headingPoppins
            } ${commonStyle.tabButtons} ${
              profileTab === "Messages" && commonStyle.tabActive
            }`}
          >
            Messages
          </div>
        </div>
        <div className={commonStyle.tabContainer}>{getTab()}</div>
      </div>
    </div>
  );
}

export default MentorProfile;
