import React, { useRef, useState } from "react";

import attachIcon from "../../../Images/icon/AttachFile.png";
import image from "../../../Images/icon/image.png";
import { Input, InputFile } from "../../../Components/FormElements/Input/Input";

import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";
import { stageType } from "../../../util";
import RadioButton from "../../../Components/FormElements/RadioButton/RadioButton";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";
import Button from "../../../Components/Button/Button";

import style from "./basics.module.scss";
import parentStyle from "../startUp.module.scss";
import globalStyle from "../.././../global.module.scss";

const initialBasicInfo = {
  websiteLink: "",
  title: "",
  subTitle: "",
  primaryCategory: "",
  subCategory: "",
  location: "",
  image: null,
  video: null,
  stageOfStartUp: "",
  launchDate: "",
  campaignDuration: "",
  projectDescription: "",
};

function Basics() {
  const [basicForm, setBasicForm] = useState({ ...initialBasicInfo });

  const inputImageRef = useRef();
  const inputVideoRef = useRef();

  return (
    <div className={style.basicsPageContainer}>
      <div className={`${style.pageHeading} ${globalStyle.headingPoppins}`}>
        Make it easy for people to learn about your project.
      </div>
      <div className={style.FormContainer}>
        <div className={style.formImageItemContainer}>
          <div className={style.imgContainer}>
            <img className={style.logoImage} src={image} alt="" />
          </div>
          <div className={style.textContainer}>
            <div
              className={`${style.labelHeading} ${globalStyle.headingPoppins}`}
            >
              Upload your logo
            </div>
            <div className={style.inputFileContainer}>
              <img src={attachIcon} alt="" className={style.attachIcon} />
              <span>Drop files here or</span>
              <input type="file" className={style.inputFile} />
            </div>
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Website link
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Website link
            </div>
            <Input
              placeHolder="www.abcdefghik.com"
              fullWidth={true}
              value={basicForm.websiteLink}
              onChange={(e) =>
                setBasicForm({ ...basicForm, websiteLink: e.target.value })
              }
              className={style.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading}  ${globalStyle.headingPoppins}`}
            >
              Project title
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Title
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={basicForm.title}
              onChange={(e) =>
                setBasicForm({ ...basicForm, title: e.target.value })
              }
              className={style.basicInput}
            />
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Subtitle
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={basicForm.subTitle}
              onChange={(e) =>
                setBasicForm({ ...basicForm, subTitle: e.target.value })
              }
              className={style.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Project Category
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Primary Category
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={basicForm.primaryCategory}
              onChange={(e) =>
                setBasicForm({ ...basicForm, primaryCategory: e.target.value })
              }
              className={style.basicInput}
            />
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Sub Category
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={basicForm.subCategory}
              onChange={(e) =>
                setBasicForm({ ...basicForm, subCategory: e.target.value })
              }
              className={style.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading}  ${globalStyle.headingPoppins}`}
            >
              Location
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Location
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={basicForm.location}
              onChange={(e) =>
                setBasicForm({ ...basicForm, location: e.target.value })
              }
              className={style.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Images
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Images
            </div>
            <InputFile
              fullWidth={true}
              value={basicForm.video}
              onChange={(e) =>
                setBasicForm({ ...basicForm, image: e.target.files })
              }
              ref={inputImageRef}
              className={style.inputFileInVisibleContainer}
            />
            <div
              className={`${style.inputFileContainer} ${globalStyle.subHeadingPoppins}`}
              onClick={() => inputImageRef.current?.click()}
            >
              Drop an image here or select a file
            </div>
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Videos(optional)
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Videos
            </div>
            <InputFile
              fullWidth={true}
              value={basicForm.video}
              onChange={(e) =>
                setBasicForm({ ...basicForm, video: e.target.files })
              }
              ref={inputVideoRef}
              className={style.inputFileInVisibleContainer}
            />
            <div
              className={`${style.inputFileContainer} ${globalStyle.subHeadingPoppins}`}
              onClick={() => inputVideoRef.current?.click()}
            >
              Drop an video here or select a file
            </div>
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading}  ${globalStyle.headingPoppins}`}
            >
              Stage of startup
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div
              className={`${style.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Stage of startup
            </div>
            <SelectDropdown
              className={style.basicDropDown}
              value={basicForm.stageOfStartUp}
              firstValue="Select the stage of Start up"
              optionData={stageType}
              onClick={(e) =>
                setBasicForm({ ...basicForm, stageOfStartUp: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Launch Date ( Optional )
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <div className={style.dateInputContainer}>
              <div className={style.inputItemContainer}>
                <input
                  placeholder="DD"
                  className={`${style.dateInput} ${globalStyle.subHeadingPoppins}`}
                  onChange={() => console.log()}
                />
                <input
                  placeholder="MM"
                  className={`${style.dateInput} ${globalStyle.subHeadingPoppins}`}
                  onChange={() => console.log()}
                />
                <input
                  placeholder="YYYY"
                  className={`${style.dateInput} ${globalStyle.subHeadingPoppins}`}
                  onChange={() => console.log()}
                />
              </div>
              <div
                className={`${style.dateSubHeading} ${globalStyle.subHeadingPoppins}`}
              >
                Pellentesque vitae pulvinar purus. Sed semper vel dui ut
                placerat. Phasellus tincidunt blandit elementum. Morbi a tortor
                id ipsum tempor consequat ut sed ex.
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Campaign duration
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <RadioButton
              radioContainerClass={style.basicRadioBtn}
              name="Fixed number of days"
              checked={basicForm.campaignDuration}
              value="fixedNumberofDays"
              onChange={(e) =>
                setBasicForm({ ...basicForm, campaignDuration: e.target.value })
              }
            />
            <RadioButton
              radioContainerClass={style.basicRadioBtn}
              name="End on specific date"
              checked={basicForm.campaignDuration}
              value="endOnSpecificDate"
              onChange={(e) =>
                setBasicForm({ ...basicForm, campaignDuration: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={style.formItemContainer}>
          <div className={style.labelContainer}>
            <div
              className={`${style.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Project description
            </div>
            <div
              className={`${style.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros.
            </div>
          </div>
          <div className={style.inputContainer}>
            <TextArea
              placeHolder="Write about your project"
              className={style.basicTextArea}
              value={basicForm.projectDescription}
              onChange={(e) =>
                setBasicForm({
                  ...basicForm,
                  projectDescription: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={parentStyle.btnContainer}>
          <Button
            text="Next"
            className={parentStyle.basicNextBtn}
            onClick={() => console.log()}
          />
        </div>
      </div>
    </div>
  );
}

export default Basics;
