import React, { useRef, useState, useImperativeHandle, forwardRef } from "react";

import profileAvatar from "../../../../Images/profileAvatar.png";
import { Input } from "../../../../Components/FormElements/Input/Input";

import style from "./step1.module.scss";
import commonStyle from "../becomeMentorsteps.module.scss";
import globalStyle from "../../../../global.module.scss";

const initialStep1Data = {
  linkedin: "",
  username: "",
  proposed_position: "",
  userimage: ""
};

const Step1 = forwardRef((props, ref) => {
  const [step1Data, setStep1Data] = useState({ ...initialStep1Data });
  const inputFileRef = useRef();

  const updateStepData = (pKey, pValue) => {
    setStep1Data({...step1Data, [pKey]: pValue})
    // sessionStorage.setItem("step1data", JSON.stringify(step1Data));
  };

  useImperativeHandle(ref, (e)=>({
    getStepData() {
      console.log(step1Data);
      sessionStorage.setItem("step1data", JSON.stringify(step1Data));
      return step1Data;
    }
  }))

  return (
    <div className={commonStyle.stepParentConatiner}>
      <div
        className={style.profileUploadContainer}
        onClick={() => inputFileRef.current.click()}
      >
        <input
          ref={inputFileRef}
          type="file"
          onChange={(e) => {
            // console.log('files ', e.target.files)
            updateStepData("imagedata", e.target.files[0])
          }
          }
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
          value={step1Data.linkedin}
          onChange={(e) => {
            updateStepData("linkedin", e.target.value)
            // setStep1Data({
            //   ...step1Data,
            //   linkedin: e.target.value,
            // })
          }}
        />
        <div className={style.getLinkedUrlLink}>Get your linkedin URL</div>
      </div>
      <div className={commonStyle.formInputItem}>
        <div
          className={`${commonStyle.formLabel} ${globalStyle.headingPoppins}`}
        >
          Full Name
        </div>
        <Input
          fullWidth={true}
          className={commonStyle.stepInput}
          name="Full Name"
          placeHolder="Enter your name"
          value={step1Data.username}
          onChange={(e) =>{
            updateStepData("username", e.target.value)
            // setStep1Data({
            //   ...step1Data,
            //   username: e.target.value,
            // })
          }}
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
            }  ${step1Data.proposed_position === "Co-Founder" && commonStyle.tagActive}`}
            onClick={(e) =>
              updateStepData("proposed_position", "Co-Founder")
              // setStep1Data({ ...step1Data, proposed_position: "Co-Founder" })
            }
          >
            Co-Founder
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.proposed_position === "Mentorship" && commonStyle.tagActive}`}
            onClick={() =>
              updateStepData("proposed_position", "Mentorship")
              // setStep1Data({ ...step1Data, proposed_position: "Mentorship" })
            }
          >
            Mentorship
          </div>
          <div className={globalStyle.break} />
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.proposed_position === "CFO" && commonStyle.tagActive}`}
            onClick={() => 
              updateStepData("proposed_position", "CFO")
              // setStep1Data({ ...step1Data, proposed_position: "CFO" })
            }
          >
            CFO
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.proposed_position === "CMO" && commonStyle.tagActive}`}
            onClick={() => 
              updateStepData("proposed_position", "CMO")
              // setStep1Data({ ...step1Data, proposed_position: "CMO" })
            }
          >
            CMO
          </div>
          <div
            className={`${commonStyle.positionTag} ${
              globalStyle.headingPoppins
            } ${step1Data.proposed_position === "CTO" && commonStyle.tagActive}`}
            onClick={() => 
              updateStepData("proposed_position", "CTO")
              // setStep1Data({ ...step1Data, proposed_position: "CTO" })
            }
          >
            CTO
          </div>
        </div>
      </div>
    </div>
  );
}, ()=> true)

export default Step1;
