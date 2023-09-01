import React from "react";

import ProfileHeader from "../../../Components/ProfileHeader/ProfileHeader";
import Button, { BtnRect } from "../../../Components/Button/Button";
import LabelAndValue from "../../../Components/LabelAndValue/LabelAndValue";

import style from "./serviceProfile.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

function ServiceProfile() {
  return (
    <div className={style.serviceProfileContainer}>
      <ProfileHeader
        backGroundImage=""
        profileImage=""
        name="Marshall Ortega"
        positionAt="UI Designer at ABC"
        editOnClick={() => console.log()}
      />
      <div className={style.profileDetailsContainer}>
        <div className={commonStyle.personalInfoCard}>
          <div className={commonStyle.personalInfoCardHeader}>
            <div className={commonStyle.personalInfoLabelContainer}>
              <label
                className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
              >
                Company Info
              </label>
              <div className={commonStyle.underLine} />
            </div>
            <BtnRect
              border={true}
              borderColor="#000"
              bgColor="#fff"
              text="Edit"
            />
          </div>
          <div className={commonStyle.infoContainer}>
            <LabelAndValue label="Name" value="ABC corporation" />
          </div>
          <div className={commonStyle.infoContainer}>
            <LabelAndValue
              label="Email Address"
              value="MarshallOrtega26@gmail.com"
            />
            <LabelAndValue label="Phone" value="+09 98765 43210 " />
          </div>
          <div className={commonStyle.infoContainer}>
            <LabelAndValue label="Location" value="San Francisco" />
            <LabelAndValue label="Website Link" value="www.abcname.com" />
          </div>
        </div>
        <div className={commonStyle.personalInfoCard}>
          <div className={commonStyle.personalInfoCardHeader}>
            <div className={commonStyle.personalInfoLabelContainer}>
              <label
                className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
              >
                Description
              </label>
              <div className={commonStyle.underLine} />
            </div>
            <BtnRect
              border={true}
              borderColor="#000"
              bgColor="#fff"
              text="Edit"
            />
          </div>
          <div className={`${commonStyle.infoContainer}`}>
            <LabelAndValue
              valueClass={style.largeTextWidth}
              label="Description"
              value="Vivamus vehicula a lectus id tincidunt. Maecenas vel malesuada dolor. Etiam a quam ut ante scelerisque lobortis id finibus nibh. Mauris condimentum, nunc ut molestie lobortis, urna massa fringilla lacus, eget molestie dui augue ac metus. Maecenas imperdiet faucibus libero. Integer ac laoreet mauris. "
            />
          </div>
          <div className={commonStyle.infoContainer}>
            <LabelAndValue label="Clients Served" value="50+" />
            <LabelAndValue label="Years of Experience" value="2+" />
          </div>
          <div className={commonStyle.infoContainer}>
            <div className={style.labelTagContainer}>
              <LabelAndValue label="Categories" />
              <div className={commonStyle.tagItemContainer}>
                <div className={commonStyle.item}>
                  <label>Marketing</label>
                </div>
                <div className={commonStyle.item}>
                  <label>SEO</label>
                </div>
                <div className={commonStyle.item}>
                  <label>SMM</label>
                </div>
                <div className={`${commonStyle.item} ${commonStyle.addBtnTag}`}>
                  <label>+ Add</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={commonStyle.personalInfoCard}>
          <div className={commonStyle.personalInfoCardHeader}>
            <div className={commonStyle.personalInfoLabelContainer}>
              <label
                className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
              >
                FAQs
              </label>
              <div className={commonStyle.underLine} />
            </div>
            <BtnRect
              border={true}
              borderColor="#000"
              bgColor="#fff"
              text="Edit"
            />
          </div>
          <div className={commonStyle.infoContainer}>
            <LabelAndValue
              label="Question 1"
              value="Etiam a quam ut ante scelerisque lobortis id finibus nibh. Mauris condimentum, nunc ut molestie lobortis, urna massa fringilla lacus, eget molestie dui augue ac metus. Maecenas imperdiet faucibus libero. Integer ac laoreet mauris. "
            />
          </div>
          <div className={globalStyle.horizontalDevider} />
          <div className={commonStyle.infoContainer}>
            <LabelAndValue
              label="Question 2"
              value="Etiam a quam ut ante scelerisque lobortis id finibus nibh. Mauris condimentum, nunc ut molestie lobortis, urna massa fringilla lacus, eget molestie dui augue ac metus. Maecenas imperdiet faucibus libero. Integer ac laoreet mauris. "
            />
          </div>
          <div className={globalStyle.horizontalDevider} />
          <div className={commonStyle.infoContainer}>
            <LabelAndValue
              label="Question 3"
              value="Etiam a quam ut ante scelerisque lobortis id finibus nibh. Mauris condimentum, nunc ut molestie lobortis, urna massa fringilla lacus, eget molestie dui augue ac metus. Maecenas imperdiet faucibus libero. Integer ac laoreet mauris. "
            />
          </div>
        </div>
        <Button text="Save & Exit" className={style.saveAndSubmitBtn} />
      </div>
    </div>
  );
}

export default ServiceProfile;
