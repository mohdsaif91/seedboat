import React, { useState } from "react";

import p1 from "../../Images/p1.png";
import p2 from "../../Images/p2.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";
import p5 from "../../Images/p5.png";
import p6 from "../../Images/p6.png";
import firstImageQuote from "../../Images/firstImageQuote.png";
import coFounder from "../../Images/icon/cofounder.png";
import consulte from "../../Images/icon/consulte.png";
import mentor from "../../Images/icon/mentor.png";
import other from "../../Images/icon/other.png";
import SelectDropdown from "../../Components/FormElements/SelectDropdown/SelectDropdown";

import style from "./mentor.module.scss";
import globalStyle from "../../global.module.scss";
import { experienceCount, timeDuration } from "../../util";
import { Input } from "../../Components/FormElements/Input/Input";
import TextArea from "../../Components/FormElements/TextArea/TextArea";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const resourceFormData = {
  experience: "",
  timeDuration: "",
  question3: "",
  question4: "",
  message: "",
};

function Mentor() {
  const [resource, setResource] = useState({ ...resourceFormData });

  const navigate = useNavigate();

  return (
    <div className={style.mentoContainer}>
      <div className={style.mentorHeroContainer}>
        <div className={style.textContainer}>
          <div className={`${style.mainText} ${globalStyle.headingPoppins}`}>
            Are you looking for something else. We have got you covered
          </div>
          <div className={`${style.subText} ${globalStyle.subHeadingPoppins}`}>
            Nulla auctor velit scelerisque gravida interdum. In hac habitasse
            platea dictumst. Fusce tincidunt nulla ac massa sagittis, quis
            interdum ex hendrerit.
          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={style.primaryImageContainer}>
            <img src={p1} alt="" className={style.heroImage} />
            <img src={p2} alt="" className={style.heroImage} />
          </div>
          <div className={style.secondaryImageContainer}>
            <img src={p3} alt="" className={style.heroImage} />
            <img src={p4} alt="" className={style.heroImage} />
          </div>
          <div className={style.primaryImageContainer}>
            <img src={p5} alt="" className={style.heroImage} />
            <img src={p6} alt="" className={style.heroImage} />
          </div>
        </div>
      </div>
      <div className={style.quoteContainer}>
        <img src={firstImageQuote} alt="" className={style.firstImage} />
        <div className={style.qouteMainContainer}>
          {/* <img src={secondImageQuote} alt="" className={style.secondImage} /> */}
          <div className={style.textContainer}>
            <div className={`${style.mainText} ${globalStyle.headingPoppins}`}>
              How would you find the perfect match for you
            </div>
            <div className={style.numberContainer}>
              {/* <div className={style.numberImagehighLight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="950"
                  height="107"
                  viewBox="0 0 950 107"
                  fill="none"
                >
                  <path
                    d="M2.5 53.0188C78.3333 14.5188 282 -39.3812 490 53.0188C698 145.419 881.667 91.5188 947.5 53.0188"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-dasharray="10 14"
                  />
                </svg>
              </div> */}
              <div className={style.numberItemCard}>
                <div className={style.numberItem}>1</div>
                <div
                  className={`${style.numberMainText} ${globalStyle.headingPoppins}`}
                >
                  Nulla auctor velit scelerisque
                </div>
                <div className={style.numberSubText}>
                  Fusce tincidunt nulla ac massa sagittis, quis interdum ex
                  hendrerit.Aliquam ullamcorper vestibulum nunc quis rhoncus.
                  Suspendisse potenti.
                </div>
              </div>
              <div className={style.numberItemCard}>
                <div className={style.numberItem}>2</div>
                <div
                  className={`${style.numberMainText} ${globalStyle.headingPoppins}`}
                >
                  Nulla auctor velit scelerisque
                </div>
                <div className={style.numberSubText}>
                  Fusce tincidunt nulla ac massa sagittis, quis interdum ex
                  hendrerit.Aliquam ullamcorper vestibulum nunc quis rhoncus.
                  Suspendisse potenti.
                </div>
              </div>
              <div className={style.numberItemCard}>
                <div className={style.numberItem}>3</div>
                <div
                  className={`${style.numberMainText} ${globalStyle.headingPoppins}`}
                >
                  Nulla auctor velit scelerisque
                </div>
                <div className={style.numberSubText}>
                  Fusce tincidunt nulla ac massa sagittis, quis interdum ex
                  hendrerit.Aliquam ullamcorper vestibulum nunc quis rhoncus.
                  Suspendisse potenti.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.formContainer}>
          <div className={`${style.mainText} ${globalStyle.headingPoppins}`}>
            Fill in the form and let us help you find the perfect resource for
            you.
          </div>
          <div className={style.resourceCardContainer}>
            <div className={style.resourceCard}>
              <img alt="" className={style.resourceImg} src={coFounder} />
              <label className={style.cardLabel}>Co-Founder</label>
            </div>
            <div className={style.resourceCard}>
              <img alt="" className={style.resourceImg} src={mentor} />
              <label className={style.cardLabel}>Mentorship</label>
            </div>
            <div className={style.resourceCard}>
              <img alt="" className={style.resourceImg} src={consulte} />
              <label className={style.cardLabel}>Consultant</label>
            </div>
            <div className={style.resourceCard}>
              <img alt="" className={style.resourceImg} src={other} />
              <label className={style.cardLabel}>Others</label>
            </div>
          </div>
          <div className={style.resourceForm}>
            <div className={style.resourceInputContainer}>
              <SelectDropdown
                value={resource.experience}
                firstValue="Experience"
                className={`${style.resourceSelect} ${style.resourSelect}`}
                onClick={(e) =>
                  setResource({
                    ...resourceFormData,
                    experience: e.target.value,
                  })
                }
                optionData={experienceCount}
              />
              <SelectDropdown
                value={resource.timeDuration}
                firstValue="Time Duration"
                className={`${style.resourceSelect} ${style.resourSelect}`}
                onClick={(e) =>
                  setResource({
                    ...resourceFormData,
                    timeDuration: e.target.value,
                  })
                }
                optionData={timeDuration}
              />
            </div>
            <div className={style.resourceInputContainer}>
              <Input
                value={resourceFormData.question3}
                onChange={(e) =>
                  setResource({
                    ...resourceFormData,
                    question3: e.target.value,
                  })
                }
                placeHolder="Question 3"
                className={style.resourceInput}
              />
              <Input
                value={resourceFormData.question4}
                onChange={(e) =>
                  setResource({
                    ...resourceFormData,
                    question4: e.target.value,
                  })
                }
                placeHolder="Question 4"
                className={style.resourceInput}
              />
            </div>
            <TextArea
              fullWidth
              placeHolder="Message/Remarks"
              value={resourceFormData.message}
              onChange={(e) =>
                setResource({ ...resourceFormData, message: e.target.value })
              }
              className={`${style.resourceInputTextArea}`}
            />
          </div>
          <Button
            text="Submit Request"
            className={style.submitBtn}
            onClick={() => navigate("/becomeMentor")}
          />
        </div>
      </div>
    </div>
  );
}

export default Mentor;
