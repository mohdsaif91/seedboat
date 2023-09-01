import React, { useState } from "react";

import { BtnRect } from "../../../Components/Button/Button";
import profileBackground from "../../../Images/profileBackground.png";
import profileImage from "../../../Images/profileImage.png";
import editProfile from "../../../Images/editProfile.png";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import MyInvestment from "./MyInvestment/MyInvestment";
import Saved from "./Saved/Saved";
import Message from "../../Message/Message";

import style from "./investorProfile.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

function InvestorProfile() {
  const [profileTab, setProfileTab] = useState("Personal Information");

  const getTab = () => {
    switch (true) {
      case profileTab === "Personal Information":
        return <PersonalInformation />;
      case profileTab === "My Investment":
        return <MyInvestment />;
      case profileTab === "Saved":
        return <Saved />;
      default:
        return <Message />;
    }
  };

  return (
    <div className={style.profileContainer}>
      <div className={style.profileDetialsContainer}>
        <img className={style.backgroundImage} alt="" src={profileBackground} />
        <div className={style.backgroundImageSecondary}>
          <div className={style.profileImageAndNameContainer}>
            <div className={style.profileImageContainer}>
              <img className={style.profileImage} alt="" src={profileImage} />
              <div
                className={style.editProfileParent}
                onClick={() => console.log()}
              >
                <img className={style.editProfile} alt="" src={editProfile} />
              </div>
            </div>
            <div className={style.profileTextContainer}>
              <div
                className={`${style.profileHeading} ${globalStyle.headingPoppins}`}
              >
                Marshall Ortega
              </div>
              <div className={style.profileSubHeading}>UI Designer at ABC</div>
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
      <div className={commonStyle.profilePageContainer}>
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
            onClick={() => setProfileTab("My Investments")}
            className={`${globalStyle.investmentTag} ${
              globalStyle.headingPoppins
            } ${commonStyle.tabButtons} ${
              profileTab === "My Investments" && commonStyle.tabActive
            }`}
          >
            My Investments
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

export default InvestorProfile;
