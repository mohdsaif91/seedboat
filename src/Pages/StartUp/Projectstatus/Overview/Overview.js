import React, { useState } from "react";

import completed from "../../../../Images/icon/completed.png";
import inCompleted from "../../../../Images/icon/incomplete.png";
import bin from "../../../../Images/icon/bin.png";

import style from "./overview.module.scss";
import globalStyle from "../../../../global.module.scss";
import { Input } from "../../../../Components/FormElements/Input/Input";
import TextArea from "../../../../Components/FormElements/TextArea/TextArea";

const stepsCompletedData = [
  {
    status: true,
    title: "Basics",
    subTitle:
      "Name your project, upload images or video and establish your campaign details.",
  },
  {
    status: true,
    title: "Fundings",
    subTitle: "Build out a budget and calculate your financial goals.",
  },
  {
    status: true,
    title: "Story",
    subTitle:
      "Add a detailed project description and convey your risk and challenges.",
  },
  {
    status: true,
    title: "Plan",
    subTitle: "Show your progress by completing milesstones.",
  },
  {
    status: true,
    title: "Payment",
    subTitle: "Verify details and link a bank account.",
  },
  {
    status: false,
    title: "Project Review",
    subTitle:
      "We will make sure you have followed all the rules and regulations.",
  },
];

const feedbackFromData = {
  name: "",
  mobile: "",
  subject: "",
  message: "",
};

function Overview() {
  const [step, setSteps] = useState(stepsCompletedData);
  const [feedbackFrom, setfeedbackFrom] = useState({ ...feedbackFromData });
  return (
    <div className={style.overviewContainer}>
      <div className={`${style.pageHeading} ${globalStyle.headingPoppins}`}>
        Project Status
      </div>
      <div className={style.stepsCompletedContainer}>
        {step
          .filter((f) => f.status)
          .map((m, i) => (
            <div key={i} className={style.stepItemContainer}>
              <img src={completed} alt="" className={style.stepIcon} />
              <div className={style.textContainer}>
                <div
                  className={`${style.textHeading} ${globalStyle.headingPoppins}`}
                >
                  {m.title}
                </div>
                <div
                  className={`${style.textSubHeading} ${globalStyle.subHeadingPoppins}`}
                >
                  {m.subTitle}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={style.stepsCompletedContainer}>
        {step
          .filter((f) => !f.status)
          .map((m, i) => (
            <div key={i} className={style.stepItemContainer}>
              <img src={inCompleted} alt="" className={style.stepIcon} />
              <div className={style.textContainer}>
                <div
                  className={`${style.textHeading} ${globalStyle.headingPoppins}`}
                >
                  {m.title}
                </div>
                <div
                  className={`${style.textSubHeading} ${globalStyle.subHeadingPoppins}`}
                >
                  {m.subTitle}
                </div>
              </div>
            </div>
          ))}
      </div>
      <button className={style.deleteBtn}>
        <img src={bin} alt="" className={style.deleteBtnIcon} />
        Delete Project
      </button>
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
  );
}

export default Overview;
