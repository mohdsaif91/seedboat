import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import HeadingAndSubHEading from "../../Components/HeadingAndSubHeading/HeadingAndSubHeading";
import VerticalDevider from "../../Components/VerticalDevider/VerticalDevider";
import Step from "../../Components/Steps/Step";
import { BlackBtn, WhiteBtn } from "../../Components/Button/Button";
import Individual from "../../Images/individual.png";
import Company from "../../Images/company.png";
import { Input } from "../../Components/FormElements/Input/Input";

import style from "./investor.module.scss";
import globalStyle from "../../global.module.scss";
import RadioButton from "../../Components/FormElements/RadioButton/RadioButton";
import SelectDropdown from "../../Components/FormElements/SelectDropdown/SelectDropdown";
import { actualJobType, gender } from "../../util";
import TextArea from "../../Components/FormElements/TextArea/TextArea";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";

const initailFormData = {
  firstName: "",
  lastName: "",
  jobType: "",
  actualJob: "",
  city: "",
  country: "",
  phoneNumber: "",
  nationality: "",
  gender: "",
  dob: "",
  tellUsAbout: "",
  companyName: "",
  websiteLink: "",
  establishMentYear: "",
};

const initialInvestmentData = {
  investmentExperince: "",
  investmentIntrest: [],
  investmentSize: 0,
  startUpStatePrefrence: "",
  locationPrefrence: {
    country: "",
    city: "",
  },
  notification: {
    desktopNotification: false,
    unreadNotification: false,
    emailNotification: false,
    announcementAndUpdate: false,
  },
};

function StartUp() {
  const [selected, setSelected] = useState(null);
  const [stepperPage, setStepperPage] = useState(null);
  const [formData, setFormData] = useState({ ...initailFormData });
  const [investmentData, setInvestmentData] = useState({
    ...initialInvestmentData,
  });
  const [value, onChange] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  useEffect(() => {
    if (!stepperPage) {
      const sessionData = JSON.parse(sessionStorage.getItem("tabAndrole"));
      setStepperPage(!sessionData ? { step: 0, role: null } : sessionData);
    }
  }, [stepperPage]);

  const showTab = () => {
    if (stepperPage.step === 0) {
      setStepperPage({ ...stepperPage, step: 1, role: selected });
      sessionStorage.setItem(
        "tabAndrole",
        JSON.stringify({ step: 1, role: selected })
      );
    } else if (stepperPage.step === 1) {
      setStepperPage({ ...stepperPage, step: 2, role: selected });
      sessionStorage.setItem(
        "tabAndrole",
        JSON.stringify({ step: 2, role: selected })
      );
    } else {
      sessionStorage.removeItem("tabAndrole");
      navigate("/investorAcknowledgMent");
    }
  };

  console.log(stepperPage);

  return (
    <div className={style.strtupContainer}>
      <div className={globalStyle.primaryContainer}>
        <HeadingAndSubHEading
          heading="give us some of your details."
          subHeading="Curabitur mollis consectetur tortor. Proin at ornare dolor. Mauris lacinia, sem eu dictum tristique, lectus dui malesuada mi, sit amet mollis nulla quam a dui. Ut volutpat et ipsum vitae ullamcorper. Etiam auctor quis justo ac aliquet. Maecenas fringilla massa id aliquam luctus. Cras vitae finibus sem. Phasellus fermentum aliquam gravida."
        />
        <VerticalDevider color="#d4d4d4" />
        <div className={globalStyle.secondaryContainer}>
          <div className={style.setpParentContainer}>
            <Step page={stepperPage?.step} />
          </div>
          <div className={style.investorTypeContainer}>
            {stepperPage?.step === 0 ? (
              <React.Fragment>
                <div
                  className={`${style.investorHeading} ${globalStyle.headingPoppins}`}
                >
                  What type of investor are you ?
                </div>
                <div className={style.investorType}>
                  <div className={style.investorPatrentCard}>
                    <div
                      onClick={() => setSelected(0)}
                      className={`${style.investorCard} ${
                        selected === 0 && style.cardSelected
                      }`}
                    >
                      <img
                        alt=""
                        src={Individual}
                        className={style.investorImg}
                      />
                      <label className={globalStyle.headingPoppins}>
                        Individual
                      </label>
                    </div>
                    <div
                      onClick={() => setSelected(1)}
                      className={`${style.investorCard} ${
                        selected === 1 && style.cardSelected
                      }`}
                    >
                      <img alt="" src={Company} className={style.investorImg} />
                      <label className={globalStyle.headingPoppins}>
                        Company
                      </label>
                      <label
                        className={`${style.investorSubHeading} ${globalStyle.subHeadingPoppins}`}
                      >
                        (VC/Family office/Corporate/other)
                      </label>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : stepperPage?.step === 1 ? (
              <div className={style.formContainer}>
                {/*  */}
                {stepperPage?.role === 0 ? (
                  <>
                    <div className={globalStyle.ItemContainer}>
                      <Input
                        className={style.firstNameInput}
                        name="firstName"
                        placeHolder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                      <Input
                        name="lastName"
                        placeHolder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                    <div className={globalStyle.ItemContainer}>
                      <RadioButton
                        checked={formData.jobType}
                        onChange={(e) =>
                          setFormData({ ...formData, jobType: e.target.value })
                        }
                        name="Job"
                        value="job"
                      />
                      <RadioButton
                        checked={formData.jobType}
                        onChange={(e) =>
                          setFormData({ ...formData, jobType: e.target.value })
                        }
                        name="Business"
                        value="business"
                      />
                      <RadioButton
                        checked={formData.jobType}
                        onChange={(e) =>
                          setFormData({ ...formData, jobType: e.target.value })
                        }
                        name="Profession"
                        value="profession"
                      />
                    </div>
                    <div className={globalStyle.ItemContainer}>
                      <SelectDropdown
                        firstValue="Select from list"
                        onClick={(e) =>
                          setFormData({
                            ...formData,
                            actualJob: e.target.value,
                          })
                        }
                        value={formData.actualJob}
                        optionData={actualJobType}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={globalStyle.ItemContainer}>
                      <Input
                        fullWidth={true}
                        className={style.companyName}
                        name="companyName"
                        placeHolder="Company Name"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={globalStyle.ItemContainer}>
                      <Input
                        fullWidth={true}
                        className={style.websiteLink}
                        name="websiteLink"
                        placeHolder="Website Link"
                        value={formData.websiteLink}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            websiteLink: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className={globalStyle.ItemContainer}>
                      <Input
                        fullWidth={true}
                        className={style.establishMentYear}
                        name="establishMentYear"
                        placeHolder="EstablishMent Year"
                        value={formData.establishMentYear}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            establishMentYear: e.target.value,
                          })
                        }
                      />
                    </div>
                  </>
                )}

                {/*  */}
                <div className={globalStyle.ItemContainer}>
                  <Input
                    className={style.firstNameInput}
                    name="city"
                    placeHolder="City"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                  <Input
                    name="country"
                    placeHolder="Country"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />
                </div>
                <div className={globalStyle.ItemContainer}>
                  <Input
                    className={style.firstNameInput}
                    name="phoneNumber"
                    withIcon={true}
                    placeHolder="Phone number"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                  <Input
                    name="nationality"
                    placeHolder="Nationality"
                    value={formData.nationality}
                    onChange={(e) =>
                      setFormData({ ...formData, nationality: e.target.value })
                    }
                  />
                </div>
                <div className={globalStyle.ItemContainer}>
                  <SelectDropdown
                    className={style.genderDropdown}
                    firstValue="Gender"
                    value={formData.gender}
                    optionData={gender}
                    onClick={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  />
                  <Input
                    name="dob"
                    placeHolder="DOB ( DD/MM/YYYY)"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                </div>
                <div className={globalStyle.ItemContainer}>
                  <TextArea
                    className={style.tellUsTextArea}
                    name="tellUsAbout"
                    onChange={(e) =>
                      setFormData({ ...formData, tellUsAbout: e.target.value })
                    }
                    value={formData.tellUsAbout}
                    placeHolder="Tell us something about yourself (max 250 words)"
                  />
                </div>
              </div>
            ) : (
              <div className={style.investmentDetials}>
                <div className={style.investMentContainer}>
                  <label
                    className={`${style.investmentLabel} ${globalStyle.headingPoppins}`}
                  >
                    Investing Experience
                  </label>
                  <div className={style.investmentEperinceContainer}>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentExperince: "New",
                        })
                      }
                      className={`${
                        investmentData.investmentExperince === "New" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins} ${
                        globalStyle.headingPoppins
                      }`}
                    >
                      New
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentExperince: "0 -5 Years",
                        })
                      }
                      className={`${
                        investmentData.investmentExperince === "0 -5 Years" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      0 -5 Years
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentExperince: "05+ Years",
                        })
                      }
                      className={`${
                        investmentData.investmentExperince === "05+ Years" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      05+ Years
                    </div>
                  </div>
                </div>
                <div className={style.investMentContainer}>
                  <label
                    className={`${style.investmentLabel} ${globalStyle.headingPoppins}`}
                  >
                    Please select your investment interest.
                  </label>
                  <div
                    className={`${style.investmentEperinceContainer} ${style.breakFlex}`}
                  >
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Technology",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Technology" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Technology
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Education",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Education" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Education
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Fintech",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Fintech" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Fintech
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Health",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Health" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Health
                    </div>
                    <div className={globalStyle.break} />
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Games",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Games" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Games
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Wildlife",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Wildlife" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Wildlife
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          investmentIntrest: "Medical",
                        })
                      }
                      className={`${
                        investmentData.investmentIntrest === "Medical" &&
                        style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Medical
                    </div>
                  </div>
                </div>
                <div className={style.investMentContainer}>
                  <label
                    className={`${style.investmentLabel} ${globalStyle.headingPoppins}`}
                  >
                    Investment Size
                  </label>
                  <div className={`${style.rangeSliderContainer}`}>
                    <input
                      className={style.rangeInput}
                      type="range"
                      min="0"
                      max="10000"
                      value={investmentData.investmentSize}
                      onChange={({ target: { value: radius } }) => {
                        setInvestmentData({
                          ...investmentData,
                          investmentSize: radius,
                        });
                      }}
                    />
                    <div className={style.rangeContainer}>
                      <div
                        className={`${style.rangeLabel} ${globalStyle.headingPoppins}`}
                      >
                        $0
                      </div>
                      {/* {investmentData.investmentSize} */}
                      <div
                        className={`${style.rangeLabel} ${globalStyle.headingPoppins}`}
                      >
                        $10000+
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className={style.investMentContainer}>
                  <label
                    className={`${style.investmentLabel} ${globalStyle.headingPoppins}`}
                  >
                    Start-up Stage Prefrence
                  </label>
                  <div className={style.investmentEperinceContainer}>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          startUpStatePrefrence: "Startup level 1",
                        })
                      }
                      className={`${
                        investmentData.startUpStatePrefrence ===
                          "Startup level 1" && style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Startup level 1
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          startUpStatePrefrence: "Startup level 2",
                        })
                      }
                      className={`${
                        investmentData.startUpStatePrefrence ===
                          "Startup level 2" && style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Startup level 2
                    </div>
                    <div
                      onClick={() =>
                        setInvestmentData({
                          ...investmentData,
                          startUpStatePrefrence: "Startup level 3",
                        })
                      }
                      className={`${
                        investmentData.startUpStatePrefrence ===
                          "Startup level 3" && style.selectTag
                      } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                    >
                      Startup level 3
                    </div>
                  </div>
                </div>
                <div className={style.investMentContainer}>
                  <label
                    className={`${style.investmentLabel} ${globalStyle.headingPoppins}`}
                  >
                    Location Prefrences
                  </label>
                  <div className={style.locationContainer}>
                    <label
                      className={`${style.locationSubLabel}  ${globalStyle.headingPoppins}`}
                    >
                      Select countries
                    </label>
                    <div className={style.investmentEperinceContainer}>
                      <div
                        onClick={() => {
                          const locationPrefrence = {
                            country: "Country 1",
                            city: investmentData.locationPrefrence.city,
                          };
                          setInvestmentData({
                            ...investmentData,
                            locationPrefrence,
                          });
                        }}
                        className={`${
                          investmentData.locationPrefrence.country ===
                            "Country 1" && style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Country 1
                      </div>
                      <div
                        onClick={() => {
                          const locationPrefrence = {
                            country: "Country 2",
                            city: investmentData.locationPrefrence.city,
                          };
                          setInvestmentData({
                            ...investmentData,
                            locationPrefrence,
                          });
                        }}
                        className={`${
                          investmentData.locationPrefrence.country ===
                            "Country 2" && style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Country 2
                      </div>
                      <div
                        onClick={() => {
                          const locationPrefrence = {
                            country: "Country 3",
                            city: investmentData.locationPrefrence.city,
                          };
                          setInvestmentData({
                            ...investmentData,
                            locationPrefrence,
                          });
                        }}
                        className={`${
                          investmentData.locationPrefrence.country ===
                            "Country 3" && style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Country 3
                      </div>
                    </div>
                  </div>
                  <div className={style.locationContainer}>
                    <label
                      className={`${style.locationSubLabel} ${globalStyle.headingPoppins}`}
                    >
                      Select cities
                    </label>
                    <div className={style.investmentEperinceContainer}>
                      <div
                        onClick={() => {
                          const locationPrefrence = {
                            country: investmentData.locationPrefrence.country,
                            city: "City Name 1",
                          };
                          setInvestmentData({
                            ...investmentData,
                            locationPrefrence,
                          });
                        }}
                        className={`${
                          investmentData.locationPrefrence.city ===
                            "City Name 1" && style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        City Name 1
                      </div>
                      <div
                        onClick={() => {
                          const locationPrefrence = {
                            country: investmentData.locationPrefrence.country,
                            city: "City Name 2",
                          };
                          setInvestmentData({
                            ...investmentData,
                            locationPrefrence,
                          });
                        }}
                        className={`${
                          investmentData.locationPrefrence.city ===
                            "City Name 2" && style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        City Name 2
                      </div>
                      <div
                        onClick={() => {
                          const locationPrefrence = {
                            country: investmentData.locationPrefrence.country,
                            city: "City Name 3",
                          };
                          setInvestmentData({
                            ...investmentData,
                            locationPrefrence,
                          });
                        }}
                        className={`${
                          investmentData.locationPrefrence.city ===
                            "City Name 3" && style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        City Name 3
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.notificationContainer} ${style.investMentContainer}`}
                >
                  <label
                    className={`${style.investmentLabel} ${globalStyle.headingPoppins}`}
                  >
                    Notifications
                  </label>
                  <div className={style.notificationContainerItem}>
                    <label
                      className={`${globalStyle.headingPoppins} ${style.notificationLabel}`}
                    >
                      Enable Desktop Notification
                    </label>
                    <ToggleButton
                      toggle={investmentData.notification.desktopNotification}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        const notification = {
                          desktopNotification: e.target.checked,
                          ...investmentData.notification,
                        };
                        setInvestmentData({ ...investmentData, notification });
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
                      toggle={investmentData.notification.unreadNotification}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        const notification = {
                          unreadNotification: e.target.checked,
                          ...investmentData.notification,
                        };
                        setInvestmentData({ ...investmentData, notification });
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
                      toggle={investmentData.notification.emailNotification}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        const notification = {
                          emailNotification: e.target.checked,
                          ...investmentData.notification,
                        };
                        setInvestmentData({ ...investmentData, notification });
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
                      toggle={investmentData.notification.announcementAndUpdate}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        const notification = {
                          announcementAndUpdate: e.target.checked,
                          ...investmentData.notification,
                        };
                        setInvestmentData({ ...investmentData, notification });
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              className={`${globalStyle.btnContainerSpaceBtw} ${style.btnContainer}`}
            >
              <WhiteBtn text="skip" onClick={() => console.log()} />
              <BlackBtn
                withIcon={true}
                className={
                  selected === null &&
                  stepperPage?.step === 0 &&
                  globalStyle.notAllowed
                }
                text="Next"
                onClick={(e) => {
                  selected === null && stepperPage?.step === 0
                    ? e.preventDefault()
                    : showTab();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartUp;
