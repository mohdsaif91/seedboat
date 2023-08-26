import React, { useState } from "react";

import Eyes from "../../../Images/icon/eyes.png";
import { BtnRect } from "../../../Components/Button/Button";
import { onBoardingPageLinks } from "../../../util";
import Basics from "../Basics/Basics";
import Teams from "../Teams/Teams";
import Funding from "../Funding/Funding";
import Plan from "../Plan/Plan";
import Contact from "../Contact/Contact";
import Payment from "../Payment/Payment";

import style from "./startUpDetialsPage.module.scss";
import globalStyle from "../../../global.module.scss";
import ProjectStatus from "../Projectstatus/ProjectStatus";
import { useNavigate } from "react-router-dom";

function StartUpDetialsPage({ projectName = "" }) {
  const [pageSelected, setPageSelected] = useState("Basics");
  const [profileTab, setProfileTab] = useState("Overview");

  const navigate = useNavigate();

  const getSelectedTab = () => {
    switch (true) {
      case pageSelected === "Basics":
        return <Basics />;
      case pageSelected === "Team":
        return <Teams />;
      case pageSelected === "Funding":
        return <Funding />;
      case pageSelected === "Plan":
        return <Plan />;
      case pageSelected === "Contact":
        return <Contact onChangeTab={() => setPageSelected("projectStatus")} />;
      case pageSelected === "Payment":
        return <Payment />;
      default:
        return <ProjectStatus showTab={profileTab} />;
    }
  };

  return (
    <div className={style.startUpDetialsContainer}>
      <div className={style.pageHeader}>
        <div className={style.pageHeading}>
          <div
            className={`${style.pageMainheading} ${globalStyle.headingPoppins}`}
          >
            {projectName === "" ? "Your Project Name" : projectName}
          </div>
          <div
            className={`${style.pageSubHeading} ${globalStyle.subHeadingPoppins}`}
          >
            By Owner Name
          </div>
        </div>
        <BtnRect
          className={style.viewProjectBtn}
          btnIcon={Eyes}
          btnWithIcon={true}
          text="Preview Project"
          onClick={() => navigate("/projectOverview")}
        />
      </div>
      <div className={style.headerIconParentContainer}>
        <div className={globalStyle.horizontalDevider} />
        {pageSelected !== "projectStatus" ? (
          <div className={style.headerIconContainer}>
            {onBoardingPageLinks.map((m) => (
              <div
                className={style.iconWithTextContainer}
                onClick={() => setPageSelected(m.text)}
              >
                <img src={m.img} alt="" className={style.linkImage} />
                <label
                  className={`${style.linkText} ${globalStyle.headingPoppins}`}
                >
                  {m.text}
                </label>
                {pageSelected === m.text && (
                  <div className={style.linkActive} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={style.btnContainer}>
            <div
              onClick={() => setProfileTab("Overview")}
              className={`${globalStyle.investmentTag} ${
                globalStyle.headingPoppins
              } ${style.tabButtons} ${
                profileTab === "Overview" && style.tabActive
              }`}
            >
              Overview
            </div>
            <div
              onClick={() => setProfileTab("Saved")}
              className={`${globalStyle.investmentTag} ${
                globalStyle.headingPoppins
              } ${style.tabButtons} ${
                profileTab === "Saved" && style.tabActive
              }`}
            >
              Saved
            </div>
            <div
              onClick={() => setProfileTab("Messages")}
              className={`${globalStyle.investmentTag} ${
                globalStyle.headingPoppins
              } ${style.tabButtons} ${
                profileTab === "Messages" && style.tabActive
              }`}
            >
              Messages
            </div>
          </div>
        )}
      </div>
      <div className={style.pageTabContainer}>{getSelectedTab()}</div>
    </div>
  );
}

export default StartUpDetialsPage;
