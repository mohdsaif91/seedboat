import React, { useRef, useState } from "react";

import profileAvatar from "../../../../Images/profileAvatar.png";
import { Input } from "../../../../Components/FormElements/Input/Input";

import style from "./step1.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";

const initialStep1Data = {
  linkedinurl: "",
  fullName: "",
  position: "",
};

function Step1() {
  const [step1Data, setStep1Data] = useState({ ...initialStep1Data });
  const inputFileRef = useRef();
  return (
    <div className={commonStyle.stepParentConatiner}>
      <div
        className={style.profileUploadContainer}
        onClick={() => inputFileRef.current.click()}
      >
        <input
          ref={inputFileRef}
          type="file"
          onChange={(e) => console.log(e.target.files)}
          className={style.profileInput}
        />
        <img src={profileAvatar} alt="" className={style.profileAvatar} />
        <div className={style.mainTextConatiner}>
          <div
            className={`${style.mainTextImage} ${globalStyle.headingPoppins}`}
          >
            Select a file
          </div>
          <div
            className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
          >
            File should be less then 2mb
          </div>
        </div>
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          LinkedIn URL Label
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="firstName"
          placeHolder="linkedin.com/in/"
          value={step1Data.linkedinurl}
          onChange={(e) =>
            setStep1Data({
              ...step1Data,
              linkedinurl: e.target.value,
            })
          }
        />
        <div className={style.getLinkedUrlLink}>Get your linkedin URL</div>
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          LinkedIn URL Label
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="Full Name"
          placeHolder="Full Name"
          value={step1Data.fullName}
          onChange={(e) =>
            setStep1Data({
              ...step1Data,
              fullName: e.target.value,
            })
          }
        />
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          What postions would you like to work as ?
        </div>
        <div className={commonStyle.positionContainer}>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            }  ${step1Data.position === "Co-Founder" && commonStyle.tagActive}`}
            onClick={(e) =>
              setStep1Data({ ...step1Data, position: "Co-Founder" })
            }
          >
            Co-Founder
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.position === "Mentorship" && commonStyle.tagActive}`}
            onClick={() =>
              setStep1Data({ ...step1Data, position: "Mentorship" })
            }
          >
            Mentorship
          </div>
          <div className={globalStyle.break} />
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.position === "CFO" && commonStyle.tagActive}`}
            onClick={() => setStep1Data({ ...step1Data, position: "CFO" })}
          >
            CFO
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.position === "CMO" && commonStyle.tagActive}`}
            onClick={() => setStep1Data({ ...step1Data, position: "CMO" })}
          >
            CMO
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.position === "CTO" && commonStyle.tagActive}`}
            onClick={() => setStep1Data({ ...step1Data, position: "CTO" })}
          >
            CTO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
