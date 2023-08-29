import React from "react";

import style from "./personalInformation.module.scss";
import globalStyle from "../../../../global.module.scss";
import commonStyle from "../../../../common.module.scss";
import LabelAndValue from "../../../../Components/LabelAndValue/LabelAndValue";
import Button, { BtnRect } from "../../../../Components/Button/Button";
import ContainerWithHeadingBtn from "../../../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";

function PersonalInformation() {
  return (
    <div className={style.personalInfoContainer}>
      <div className={commonStyle.personalInfoCard}>
        <div className={commonStyle.personalInfoCardHeader}>
          <div className={commonStyle.personalInfoLabelContainer}>
            <label
              className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Personal Info
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
          <LabelAndValue label="First Name" value="Marshall" />
          <LabelAndValue label="Last Name" value="Ortega" />
        </div>
        <div className={commonStyle.infoContainer}>
          <LabelAndValue
            label="Email Address"
            value="MarshallOrtega26@gmail.com"
          />
          <LabelAndValue label="Phone" value="+09 98765 43210 " />
        </div>
        <div className={commonStyle.infoContainer}>
          <LabelAndValue label="Profile" value="Investor" change={true} />
        </div>
      </div>
      <div className={commonStyle.personalInfoCard}>
        <div className={commonStyle.personalInfoCardHeader}>
          <div className={commonStyle.personalInfoLabelContainer}>
            <label
              className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Personal Info
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
            label="Your Story"
            value="Vivamus vehicula a lectus id tincidunt. Maecenas vel malesuada dolor. Etiam a quam ut ante scelerisque lobortis id finibus nibh. Mauris condimentum, nunc ut molestie lobortis, urna massa fringilla lacus, eget molestie dui augue ac metus. Maecenas imperdiet faucibus libero. Integer ac laoreet mauris. "
          />
        </div>
      </div>
      <div className={commonStyle.personalInfoCard}>
        <div className={commonStyle.personalInfoCardHeader}>
          <div className={commonStyle.personalInfoLabelContainer}>
            <label
              className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Mentor Info
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
          <LabelAndValue label="Company" value="Apple" />
          <LabelAndValue label="Tittle" value="UI/UX Designer" />
          <LabelAndValue label="Experience" value="3 Years" />
        </div>
        <div className={commonStyle.infoContainer}>
          <LabelAndValue label="School" value="GHY University" />
        </div>
        <div className={commonStyle.infoContainer}>
          <LabelAndValue
            label="Linkedin"
            value="https://www.linkedin.com/in/mark-zuckerberg-618bba58/"
          />
        </div>
        <div className={commonStyle.infoContainer}>
          <LabelAndValue
            label="Twitter"
            value="https://www.linkedin.com/in/mark-zuckerberg-618bba58/"
          />
        </div>
        <div className={commonStyle.infoContainer}>
          <LabelAndValue label="Portfolio/Website link" value="N/A" />
        </div>
      </div>
      <div className={commonStyle.personalInfoCard}>
        <div className={commonStyle.personalInfoCardHeader}>
          <div className={commonStyle.personalInfoLabelContainer}>
            <label
              className={`${commonStyle.personalInfoLabel} ${globalStyle.headingPoppins}`}
            >
              Mentor Profile
            </label>
            <div className={commonStyle.underLine} />
          </div>
        </div>
        <div className={style.overViewItem}>
          <LabelAndValue label="Can Be" />
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>Mentor</label>
            </div>
            <div className={style.item}>
              <label>Chief Technical Officer</label>
            </div>
            <div className={style.item}>
              <label>Project Manager</label>
            </div>
            <div className={`${style.item} ${style.addBtn}`}>
              <label>+ Add</label>
            </div>
          </div>
        </div>
        <div className={style.overViewItem}>
          <LabelAndValue label="Time Commitment" />
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>Full Time</label>
            </div>
            <div className={style.item}>
              <label>Part Time</label>
            </div>
            <div className={style.item}>
              <label>Project Based</label>
            </div>
            <div className={`${style.item} ${style.addBtn}`}>
              <label>+ Add</label>
            </div>
          </div>
        </div>
        <div className={style.overViewItem}>
          <LabelAndValue label="Discipline" />
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>Technical</label>
            </div>
            <div className={style.item}>
              <label>Management</label>
            </div>
            <div className={`${style.item} ${style.addBtn}`}>
              <label>+ Add</label>
            </div>
          </div>
        </div>
        <div className={style.overViewItem}>
          <LabelAndValue label="Skills" />
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>Management</label>
            </div>
            <div className={style.item}>
              <label>Leadership</label>
            </div>
            <div className={`${style.item} ${style.addBtn}`}>
              <label>+ Add</label>
            </div>
          </div>
        </div>
        <div className={style.overViewItem}>
          <LabelAndValue label="Tools" />
          <div className={style.itemContainer}>-</div>
        </div>
        <div className={style.overViewItem}>
          <LabelAndValue label="Fluent in" />
          <div className={style.itemContainer}>
            <div className={style.item}>
              <label>Emglish</label>
            </div>
            <div className={style.item}>
              <label>Hindi</label>
            </div>
            <div className={style.item}>
              <label>Spanish</label>
            </div>
            <div className={`${style.item} ${style.addBtn}`}>
              <label>+ Add</label>
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
              Compensation
            </label>
            <div className={commonStyle.underLine} />
          </div>
        </div>
        <div className={`${style.personalLabelContainer}`}>
          <div className={style.personalLabel}>Charger for Video call</div>
          <div className={style.personalLabel2}>
            Price for 20-minute video call.
          </div>
          <div className={style.personalValue}>$690/20min</div>
          <div className={style.personalLabel}>Charger for Membership Plan</div>
          <div className={style.personalLabel2}>
            Recurring video calls, unlimited messages.
          </div>
          <div className={style.personalValue}>$690/month</div>
        </div>
      </div>
      <Button text="Save and Exit" className={style.saveBtn} />
      <ContainerWithHeadingBtn
        headingClass={style.bottomHeading}
        heading="Would you like to be a mentor/co-founder along with
        being a Investor"
        subHeading="Would you like to be a Investor along with being a
          Mentor/Co-founder"
        btnText="Join us as Investor"
        rectBtn={true}
        fullWidth={true}
        onClick={() => console.log()}
      />
    </div>
  );
}

export default PersonalInformation;
