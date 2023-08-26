import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import profileImage from "../../../Images/profileImg2.png";
import cardImage from "../../../Images/projectImg.png";
import facebookb from "../../../Images/icon/facebookb.png";
import youtubeb from "../../../Images/icon/youtubeb.png";
import twitterb from "../../../Images/icon/twitterb.png";
import instagramb from "../../../Images/icon/instagramb.png";
import Button from "../../../Components/Button/Button";
import SlideBtn from "../../../Components/SlideButton/SlideBtn";
import profileImage3 from "../../../Images/profileImage3.png";
import myInvestment from "../../../Images/icon/myInvestment.png";
import savedItem from "../../../Images/icon/savedItem.png";
import kyc from "../../../Images/icon/kyc.png";
import setting from "../../../Images/icon/setting.png";
import support from "../../../Images/icon/support.png";
import rightArrow from "../../../Images/icon/rightArrow.png";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";
import { Input } from "../../../Components/FormElements/Input/Input";

import style from "./projectOverview.module.scss";
import globalStyle from "../../../global.module.scss";

const feedbackFromData = {
  name: "",
  mobile: "",
  subject: "",
  message: "",
};

function ProjectOverview() {
  const [show, setShow] = useState(false);
  const [feedbackFrom, setfeedbackFrom] = useState({ ...feedbackFromData });

  const navigate = useNavigate();

  return (
    <div className={style.ProjectoverviewContainer}>
      <div className={style.primaryConatiner}>
        <div className={style.pageHeadingContainer}>
          <div className={style.PageHeading}>
            <div
              className={`${style.pageMainheading} ${globalStyle.headingPoppins}`}
            >
              Your Project Name
            </div>
            <div
              className={`${style.pageSubHeading} ${globalStyle.subHeadingPoppins}`}
            >
              By Owner Name
            </div>
          </div>
          <div>
            <img
              src={profileImage}
              alt=""
              className={style.profileImg}
              onClick={() => setShow(!show)}
            />
            {show && (
              <div className={style.profileDropDownContainer}>
                <div className={style.profileTextContainer}>
                  <img
                    src={profileImage3}
                    alt=""
                    className={style.dropDownProfileImage}
                  />
                  <div className={style.textContainer}>
                    <div
                      className={`${style.mainHeading} ${globalStyle.headingPoppins}`}
                    >
                      Marshall Ortega
                    </div>
                    <div
                      className={`${style.vieProfileLink} ${globalStyle.subHeadingPoppins}`}
                    >
                      View Profile
                      <div className={style.underLine} />
                    </div>
                  </div>
                </div>
                <div className={style.profileStrength}>
                  <div
                    className={`${style.strengthLabel} ${globalStyle.headingPoppins}`}
                  >
                    Your Profile Strength
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="28"
                    className={style.inputRange}
                  />
                  <div
                    className={`${style.rangeInputvalue} ${globalStyle.headingPoppins}`}
                  >
                    28%
                  </div>
                </div>
                <ul className={style.profileListContainer}>
                  <li className={style.listItem}>
                    <div className={style.imageTextContainer}>
                      <img
                        src={myInvestment}
                        alt=""
                        className={style.profileIcon}
                      />
                      <span
                        className={`${style.profileText} ${globalStyle.headingPoppins}`}
                      >
                        My Investments
                      </span>
                    </div>
                    <img
                      src={rightArrow}
                      alt=""
                      className={style.rightArrowIcon}
                    />
                  </li>
                  <li className={style.listItem}>
                    <div className={style.imageTextContainer}>
                      <img
                        src={savedItem}
                        alt=""
                        className={style.profileIcon}
                      />
                      <span
                        className={`${style.profileText} ${globalStyle.headingPoppins}`}
                      >
                        Saved Items
                      </span>
                    </div>
                    <img
                      src={rightArrow}
                      alt=""
                      className={style.rightArrowIcon}
                    />
                  </li>
                  <li className={style.listItem}>
                    <div className={style.imageTextContainer}>
                      <img src={kyc} alt="" className={style.profileIcon} />
                      <span
                        className={`${style.profileText} ${globalStyle.headingPoppins}`}
                      >
                        KYC
                      </span>
                    </div>
                    <img
                      src={rightArrow}
                      alt=""
                      className={style.rightArrowIcon}
                    />
                  </li>
                  <li className={style.listItem}>
                    <div className={style.imageTextContainer}>
                      <img src={setting} alt="" className={style.profileIcon} />
                      <span className={style.profileText}>Settings</span>
                    </div>
                    <img
                      src={rightArrow}
                      alt=""
                      className={style.rightArrowIcon}
                    />
                  </li>
                  <li className={style.listItem}>
                    <div className={style.imageTextContainer}>
                      <img src={support} alt="" className={style.profileIcon} />
                      <span className={style.profileText}>Support</span>
                    </div>
                    <img
                      src={rightArrow}
                      alt=""
                      className={style.rightArrowIcon}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={`${globalStyle.horizontalDevider}`} />
        <Button
          text="Exit Preview"
          className={style.extBtn}
          onClick={() => navigate("/startUpDetialsPage")}
        />
        <div className={style.projectCardContainer}>
          <div className={style.cardImgTextContainer}>
            <img alt="" src={cardImage} className={style.projectCardImg} />
            <div className={style.cardDetialsbtnContainer}>
              <div className={style.cardLabelItem}>
                <label
                  className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
                >
                  Current
                </label>
                <div
                  className={`${style.cardValue} ${globalStyle.headingPoppins}`}
                >
                  $65,000
                </div>
              </div>
              <div className={style.horizontalDeviderOrange} />
              <div className={style.cardLabelItem}>
                <label
                  className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
                >
                  Target
                </label>
                <div
                  className={`${style.cardValue} ${globalStyle.headingPoppins}`}
                >
                  $80,000
                </div>
              </div>
              <div className={style.horizontalDeviderOrange} />
              <div className={style.cardLabelItem}>
                <label
                  className={`${style.cardLabel} ${globalStyle.subHeadingPoppins}`}
                >
                  Donors
                </label>
                <div
                  className={`${style.cardValue} ${globalStyle.headingPoppins}`}
                >
                  106
                </div>
              </div>
              <SlideBtn className={style.bottomBtnService} />
            </div>
          </div>
          <div className={style.cardDetailsContainer}>
            <div className={style.cardPrimaryConatiner}>
              <div className={style.cardTitleContainer}>
                <div
                  className={`${style.cardTitle} ${globalStyle.headingPoppins}`}
                >
                  Campaign
                </div>
                <div className={style.blackDash} />
              </div>
              <div
                className={`${style.cardSubTitle} ${globalStyle.subHeadingPoppins}`}
              >
                Nulla sollicitudin maximus porttitor. Phasellus scelerisque
                rhoncus vestibulum. Quisque a arcu eros. Phasellus vitae metus
                vitae lacus feugiat venenatis. Ut convallis sapien in aliquet
                interdum. Aenean semper aliquet elit nec posuere. Morbi lectus
                massa, varius sed risus quis, condimentum convallis risus. Nunc
                risus sem, fringilla quis est non, posuere efficitur eros.
              </div>
            </div>
            <div className={style.iconContainer}>
              <img src={facebookb} alt="" className={style.socialIcon} />
              <img src={twitterb} alt="" className={style.socialIcon} />
              <img src={youtubeb} alt="" className={style.socialIcon} />
              <img src={instagramb} alt="" className={style.socialIcon} />
            </div>
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${style.extraMargin}`}
        />
        <div className={style.feedbackContainer}>
          <div
            className={`${style.feedbackHeading} ${globalStyle.headingPoppins}`}
          >
            Please don’t hesitate to contact us if you have any other queries.
          </div>
          <div className={style.feedbackFormContainer}>
            <div className={style.formItemContainer}>
              <Input
                placeHolder="What’s your name"
                value={feedbackFrom.name}
                onChange={(e) =>
                  setfeedbackFrom({ ...feedbackFrom, name: e.target.value })
                }
                className={`${style.feedbackInput} ${style.flexInput}`}
              />
              <Input
                placeHolder="What’s your phone number"
                value={feedbackFrom.mobile}
                onChange={(e) =>
                  setfeedbackFrom({ ...feedbackFrom, mobile: e.target.value })
                }
                className={`${style.feedbackInput} ${style.flexInput}`}
              />
            </div>
            <Input
              fullWidth={true}
              placeHolder="Subject"
              value={feedbackFrom.subject}
              onChange={(e) =>
                setfeedbackFrom({ ...feedbackFrom, subject: e.target.value })
              }
              className={style.feedbackInput}
            />
            <TextArea
              className={style.feedbackTextArea}
              placeHolder="Message/Remarks"
              value={feedbackFrom.message}
              onChange={(e) =>
                setfeedbackFrom({ ...feedbackFrom, message: e.target.value })
              }
              fullWidth={true}
            />
            <button className={style.deleteBtn}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
