import React, { useState } from "react";

import Button, {
  BlackBtn,
  BtnRect,
} from "../../../../Components/Button/Button";
import LabelAndValue from "../../../../Components/LabelAndValue/LabelAndValue";
import { exploreCard, investmentType, stageType } from "../../../../util";
import ToggleButton from "../../../../Components/ToggleButton/ToggleButton";
import ContainerWithHeadingBtn from "../../../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";
import InvestCard from "../../../../Components/Card/InvestMentCard/InvestCard";
import SlideBtn from "../../../../Components/SlideButton/SlideBtn";

import style from "./personalInformation.module.scss";
import globalStyle from "../../../../global.module.scss";
import { useNavigate } from "react-router-dom";

const initialNotificationData = {
  desktop: false,
  unreadNotification: false,
  emailNotification: false,
  announcementAndUpdate: false,
};

const initialContactForm = {
  name: "",
  mobileNumber: "",
  subject: "",
  message: "",
};

function PersonalInformation({ data }) {
  const [notification, setNotification] = useState({
    ...initialNotificationData,
  });
  const [contactForm, setContactForm] = useState({ ...initialContactForm });

  const navigate = useNavigate();

  console.log(data.investment_notification);

  return (
    <div className={style.personalInformationContainer}>
      <div className={style.personalInfoCard}>
        <div className={style.personalInfoCardHeader}>
          <div className={style.personalInfoLabelContainer}>
            <label
              className={`${style.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Personal Info
            </label>
            <div className={style.underLine} />
          </div>
          <BtnRect
            border={true}
            borderColor="#000"
            bgColor="#fff"
            text="Edit"
          />
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue label="First Name" value={data.fname} />
          <LabelAndValue label="Last Name" value={data.lname} />
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue
            label="Email Address"
            value="MarshallOrtega26@gmail.com"
          />
          <LabelAndValue label="Phone" value="+09 98765 43210 " />
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue label="City" value={data.investment_city} />
          <LabelAndValue label="Country" value={data.investment_country} />
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue label="Gender" value="Male" />
          <LabelAndValue label="DOB" value="01/01/1990" />
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue label="Profile" value="Investor" change={true} />
        </div>
      </div>
      <div className={style.personalInfoCard}>
        <div className={style.personalInfoCardHeader}>
          <div className={style.personalInfoLabelContainer}>
            <label
              className={`${style.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Interests
            </label>
            <div className={style.underLine} />
          </div>
          <BtnRect
            border={true}
            borderColor="#000"
            bgColor="#fff"
            text="Edit"
          />
        </div>
        <div className={`${style.infoContainer} ${globalStyle.dFlexCol}`}>
          <LabelAndValue label="Investment interest." value="" />
          <div className={style.investmentTypeContainer}>
            <div
              // onClick={() => setinvestmentTab(m)}
              className={`${globalStyle.investmentTag} ${globalStyle.headingPoppins} ${style.tabButtons}`}
              //  ${investmentTab === m && style.tabActive}`}
            >
              {data.investment_interest}
            </div>
            {/* {investmentType.map((m) => (
              <div
                onClick={() => setinvestmentTab(m)}
                className={`${globalStyle.investmentTag} ${
                  globalStyle.headingPoppins
                } ${style.tabButtons} ${
                  investmentTab === m && style.tabActive
                }`}
              >
                {m}
              </div>
            ))} */}
            <div
              onClick={() => console.log()}
              className={`${globalStyle.investmentTag} ${globalStyle.headingPoppins} ${style.tabButtons}`}
            >
              + Add
            </div>
          </div>
        </div>
        <div className={`${style.infoContainer} ${globalStyle.dFlexCol}`}>
          <LabelAndValue label="Stage Prefrence" value="" />
          <div className={style.investmentTypeContainer}>
            <div
              // onClick={() => setinvestmentTab(m)}
              className={`${globalStyle.investmentTag} ${globalStyle.headingPoppins} ${style.tabButtons}`}
              //  ${investmentTab === m && style.tabActive}`}
            >
              {data.investment_stage === "level1"
                ? "stage 1"
                : data.investment_stage === "level2"
                ? "stage 2"
                : "stage 3"}
            </div>
            {/* {stageType.map((m) => (
              <div
                onClick={() => setinvestmentTab(m)}
                className={`${globalStyle.investmentTag} ${
                  globalStyle.headingPoppins
                } ${style.tabButtons} ${
                  investmentTab === m && style.tabActive
                }`}
              >
                {m}
              </div>
            ))} */}
          </div>
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue label="Location Prefrences" value="City 1,City 2" />
        </div>
        <div className={style.infoContainer}>
          <LabelAndValue
            label="Investment Size"
            value={`$0 - $${data.investment_size}`}
            change={true}
          />
        </div>
      </div>
      <div className={style.personalInfoCard}>
        <div className={style.personalInfoCardHeader}>
          <div className={style.personalInfoLabelContainer}>
            <label
              className={`${style.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Notification Setting
            </label>
            <div className={style.underLine} />
          </div>
        </div>
        <div className={style.toggleContainer}>
          <div className={style.notificationContainerItem}>
            <label
              className={`${globalStyle.headingPoppins} ${style.notificationLabel}`}
            >
              Enable Desktop Notification
            </label>
            <ToggleButton
              toggle={
                data.investment_notification.desktop_notification === "true"
              }
              onChange={(e) => {
                setNotification({
                  ...notification,
                  desktop: e.target.checked,
                });
              }}
            />
          </div>
          <div className={style.notificationContainerItem}>
            <label
              className={`${globalStyle.headingPoppins} ${style.notificationLabel}`}
            >
              Enable Unread Notification
            </label>
            <ToggleButton
              toggle={data.investment_notification.read_notification === "true"}
              onChange={(e) => {
                setNotification({
                  ...notification,
                  unreadNotification: e.target.checked,
                });
              }}
            />
          </div>
          <div className={style.notificationContainerItem}>
            <label
              className={`${globalStyle.headingPoppins} ${style.notificationLabel}`}
            >
              Email Notification
            </label>
            <ToggleButton
              toggle={
                data.investment_notification.email_notification === "true"
              }
              onChange={(e) => {
                setNotification({
                  ...notification,
                  emailNotification: e.target.checked,
                });
              }}
            />
          </div>
          <div className={style.notificationContainerItem}>
            <label
              className={`${globalStyle.headingPoppins} ${style.notificationLabel}`}
            >
              Announcements and updates
            </label>
            <ToggleButton
              toggle={
                data.investment_notification.updates_notification === "true"
              }
              onChange={(e) => {
                setNotification({
                  ...notification,
                  announcementAndUpdate: e.target.checked,
                });
              }}
            />
          </div>
        </div>
      </div>
      <Button
        text="Save & Exit"
        onClick={() => navigate("/investmentExploer")}
        className={style.saveAndExitbtn}
      />
      <ContainerWithHeadingBtn
        className={style.bottomContainer}
        headingClass={style.bottomHeading}
        heading="Would you like to be a investor along with being a mentor"
        subHeading="Integer porttitor laoreet massa in facilisis. Sed viverra sem eget elementum aliquam. Suspendisse potenti. Pellentesque vitae volutpat velit."
        btnText="Join us as Investor"
        rectBtn={true}
        fullWidth={true}
        onClick={() => console.log()}
      />
      <div className={globalStyle.topPickContainer}>
        <div className={globalStyle.topPickContainerHeader}>
          <label
            className={`${globalStyle.pageHeading} ${globalStyle.topPickHeading}`}
          >
            Top Picks for you
          </label>
          <SlideBtn className={globalStyle.bottomBtnService} />
        </div>
        <div className={globalStyle.topPickCards}>
          {exploreCard.recentlyFunded.map((m) => (
            <InvestCard data={m} />
          ))}
        </div>
      </div>
      <div className={style.contactUsForm}>
        <div
          className={`${globalStyle.headingPoppins} ${style.contactUsFormHeading}`}
        >
          Please don’t hesitate to contact us if you have any other queries.
        </div>
        <div className={style.formContainer}>
          <div className={style.formItemContainer}>
            <input
              placeholder="What’s your name"
              className={style.formInputItem}
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
            />
            <input
              placeholder="What’s your phone number"
              className={style.formInputItem}
              value={contactForm.mobileNumber}
              onChange={(e) =>
                setContactForm({ ...contactForm, mobileNumber: e.target.value })
              }
            />
          </div>
          <div className={style.formItemContainer}>
            <input
              placeholder="Subject"
              className={`${style.formInputItem} ${globalStyle.fullWidth}`}
              value={contactForm.subject}
              onChange={(e) =>
                setContactForm({ ...contactForm, subject: e.target.value })
              }
            />
          </div>
          <div className={style.formItemContainer}>
            <textarea
              placeholder="Message/Remarks"
              className={`${style.formInputItem} ${style.paddingTop} ${globalStyle.fullWidth}`}
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
            />
          </div>
          <BlackBtn text="Submit" className={style.submitBtn} />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
