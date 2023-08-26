import React, { useState } from "react";

import style from "./contact.module.scss";
import parentStyle from "../startUp.module.scss";
import globalStyle from "../../../global.module.scss";
import { Input } from "../../../Components/FormElements/Input/Input";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { projectType } from "../../../util";
import Button from "../../../Components/Button/Button";

const initailContactData = {
  email: "",
  projectType: "",
  accountNumber: "",
  confirmAccountNumber: "",
  isfcCode: "",
  branch: "",
};

function Contact({ onChangeTab }) {
  const [contactData, setContactData] = useState({ ...initailContactData });
  return (
    <div className={style.contactContainer}>
      <div
        className={`${parentStyle.pageHeading} ${globalStyle.headingPoppins}`}
      >
        Plan and manage your project’s finances.
      </div>
      <div className={parentStyle.formContainer}>
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Email
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Enter Email Address
            </div>
            <Input
              placeHolder="your@xyz.com"
              fullWidth={true}
              value={contactData.email}
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  email: e.target.value,
                });
              }}
              className={parentStyle.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Project type
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            ></div>
            <SelectDropdown
              className={style.contactDropdown}
              value={contactData.projectType}
              firstValue={projectType[0]}
              optionData={projectType}
              onClick={(e) =>
                setContactData({ ...contactData, projectType: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Bank account
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <Input
              placeHolder="Account Number"
              fullWidth={true}
              value={contactData.accountNumber}
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  accountNumber: e.target.value,
                });
              }}
              className={parentStyle.basicInput}
            />
            <Input
              placeHolder="Confirm Account Number"
              fullWidth={true}
              value={contactData.confirmAccountNumber}
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  confirmAccountNumber: e.target.value,
                });
              }}
              className={parentStyle.basicInput}
            />
            <Input
              placeHolder="IFSC Code"
              fullWidth={true}
              value={contactData.isfcCode}
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  isfcCode: e.target.value,
                });
              }}
              className={parentStyle.basicInput}
            />
            <Input
              placeHolder="Branch"
              fullWidth={true}
              value={contactData.branch}
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  branch: e.target.value,
                });
              }}
              className={parentStyle.basicInput}
            />
          </div>
        </div>
        <div className={parentStyle.btnContainer}>
          <Button text="Submit" onClick={() => onChangeTab()} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
