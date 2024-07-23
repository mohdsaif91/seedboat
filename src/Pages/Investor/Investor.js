import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import HeadingAndSubHEading from "../../Components/HeadingAndSubHeading/HeadingAndSubHeading";
import VerticalDevider from "../../Components/VerticalDevider/VerticalDevider";
import Step from "../../Components/Steps/Step";
import { BlackBtn, WhiteBtn } from "../../Components/Button/Button";
import Individual from "../../Images/individual.png";
import Company from "../../Images/company.png";
import { Input } from "../../Components/FormElements/Input/Input";
import RadioButton from "../../Components/FormElements/RadioButton/RadioButton";
import SelectDropdown from "../../Components/FormElements/SelectDropdown/SelectDropdown";
import { actualJobType, gender } from "../../util";
import TextArea from "../../Components/FormElements/TextArea/TextArea";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import PageLoader from "../../Components/PageLoader/PageLoader";

import style from "./investor.module.scss";
import globalStyle from "../../global.module.scss";

const initailFormData = {
  investor_type: "",
  company_name: "",
  company_website: "",
  company_establishment: "",
  fname: "",
  lname: "",
  email: "",
  phonenumber: "",
  user_city: "",
  user_country: "",
  user_profession: "",
  user_service: "",
  user_gender: "",
  user_nationality: "",
  dob: "",
  user_message: "",
  investor_experience: "",
  investment_interest: "",
  investment_size: "",
  investment_stage: "",
  investment_country: "",
  investment_city: "",
  investment_notification: {
    read_notification: false,
    desktop_notification: false,
    email_notification: false,
    updates_notification: false,
  },
};

function StartUp() {
  const [selected, setSelected] = useState(null);
  const [stepperPage, setStepperPage] = useState(null);
  const [formData, setFormData] = useState({ ...initailFormData });
  const [value, onChange] = useState(0);
  const [loading, setLoading] = useState(false);

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
      setStepperPage(!sessionData ? { step: 1, role: null } : sessionData);
    }
  }, [stepperPage]);

  const showTab = () => {
    if (stepperPage.step === 1) {
      setStepperPage({ ...stepperPage, step: 2, role: selected });
      sessionStorage.setItem(
        "tabAndrole",
        JSON.stringify({ step: 1, role: selected })
      );
    } else if (stepperPage.step === 2) {
      setStepperPage({ ...stepperPage, step: 3, role: selected });
      sessionStorage.setItem(
        "tabAndrole",
        JSON.stringify({ step: 3, role: selected })
      );
    } else {
      setLoading(true);
      Axios.post(`${Axios.defaults.baseURL}/investor/investorassign`, formData)
        .then((res) => {
          setLoading(false);
          sessionStorage.removeItem("tabAndrole");
          navigate("/investorAcknowledgMent");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  console.log(formData, " <>?");

  return (
    <div className={style.strtupContainer}>
      {loading ? (
        <PageLoader />
      ) : (
        <div className={globalStyle.primaryContainer}>
          <HeadingAndSubHEading
            heading="give us some of your details."
            subHeading="Curabitur mollis consectetur tortor. Proin at ornare dolor. Mauris lacinia, sem eu dictum tristique, lectus dui malesuada mi, sit amet mollis nulla quam a dui. Ut volutpat et ipsum vitae ullamcorper. Etiam auctor quis justo ac aliquet. Maecenas fringilla massa id aliquam luctus. Cras vitae finibus sem. Phasellus fermentum aliquam gravida."
          />
          <VerticalDevider color="#d4d4d4" />
          <div className={globalStyle.secondaryContainer}>
            <div className={style.setpParentContainer}>
              <Step page={stepperPage?.step} totalSteps={[1, 2, 3]} />
            </div>
            <div className={style.investorTypeContainer}>
              {stepperPage?.step === 1 ? (
                <React.Fragment>
                  <div
                    className={`${style.investorHeading} ${globalStyle.headingPoppins}`}
                  >
                    What type of investor are you ?
                  </div>
                  <div className={style.investorType}>
                    <div className={style.investorPatrentCard}>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investor_type: "individual",
                          })
                        }
                        className={`${style.investorCard} ${
                          formData.investor_type === "individual" &&
                          style.cardSelected
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
                        onClick={() =>
                          setFormData({ ...formData, investor_type: "company" })
                        }
                        className={`${style.investorCard} ${
                          formData.investor_type === "company" &&
                          style.cardSelected
                        }`}
                      >
                        <img
                          alt=""
                          src={Company}
                          className={style.investorImg}
                        />
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
              ) : stepperPage?.step === 2 ? (
                <div className={style.formContainer}>
                  {/*  */}
                  {formData.investor_type === "individual" ? (
                    <>
                      <div className={globalStyle.ItemContainer}>
                        <Input
                          className={style.firstNameInput}
                          name="firstName"
                          placeHolder="First Name"
                          value={formData.fname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fname: e.target.value,
                            })
                          }
                        />
                        <Input
                          name="lastName"
                          placeHolder="Last Name"
                          value={formData.lname}
                          onChange={(e) =>
                            setFormData({ ...formData, lname: e.target.value })
                          }
                        />
                      </div>
                      <div className={globalStyle.ItemContainer}>
                        <RadioButton
                          checked={formData.user_profession === "job"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              user_profession: e.target.value,
                            })
                          }
                          name="Job"
                          value="job"
                        />
                        <RadioButton
                          checked={formData.user_profession === "business"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              user_profession: e.target.value,
                            })
                          }
                          name="Business"
                          value="business"
                        />
                        <RadioButton
                          checked={formData.user_profession === "profession"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              user_profession: e.target.value,
                            })
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
                              user_service: e.target.value,
                            })
                          }
                          value={formData.user_service}
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
                          value={formData.company_name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company_name: e.target.value,
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
                          value={formData.company_website}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company_website: e.target.value,
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
                          value={formData.company_establishment}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company_establishment: e.target.value,
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
                      value={formData.user_city}
                      onChange={(e) =>
                        setFormData({ ...formData, user_city: e.target.value })
                      }
                    />
                    <Input
                      name="country"
                      placeHolder="Country"
                      value={formData.user_country}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user_country: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className={globalStyle.ItemContainer}>
                    <Input
                      className={style.firstNameInput}
                      name="phoneNumber"
                      withIcon={true}
                      placeHolder="Phone number"
                      value={formData.phonenumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phonenumber: e.target.value,
                        })
                      }
                    />
                    <Input
                      name="nationality"
                      placeHolder="Nationality"
                      value={formData.user_nationality}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user_nationality: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className={globalStyle.ItemContainer}>
                    <SelectDropdown
                      className={style.genderDropdown}
                      firstValue="Gender"
                      value={formData.user_gender}
                      optionData={gender}
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          user_gender: e.target.value,
                        })
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
                        setFormData({
                          ...formData,
                          user_message: e.target.value,
                        })
                      }
                      value={formData.user_message}
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
                          setFormData({
                            ...formData,
                            investor_experience: "New",
                          })
                        }
                        className={`${
                          formData.investor_experience === "New" &&
                          style.selectTag
                        } ${style.investmentTag} ${
                          globalStyle.headingPoppins
                        } ${globalStyle.headingPoppins}`}
                      >
                        New
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investor_experience: "0-5 Years",
                          })
                        }
                        className={`${
                          formData.investor_experience === "0-5 Years" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        0 -5 Years
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investor_experience: "05+ Years",
                          })
                        }
                        className={`${
                          formData.investor_experience === "05+ Years" &&
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
                          setFormData({
                            ...formData,
                            investment_interest: "Technology",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Technology" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Technology
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_interest: "Education",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Education" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Education
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_interest: "Fintech",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Fintech" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Fintech
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_interest: "Health",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Health" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Health
                      </div>
                      <div className={globalStyle.break} />
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_interest: "Games",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Games" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Games
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_interest: "Wildlife",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Wildlife" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Wildlife
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_interest: "Medical",
                          })
                        }
                        className={`${
                          formData.investment_interest === "Medical" &&
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
                        value={formData.investment_size}
                        onChange={({ target: { value: radius } }) => {
                          setFormData({ ...formData, investment_size: radius });
                        }}
                      />
                      <div className={style.rangeContainer}>
                        <div
                          className={`${style.rangeLabel} ${globalStyle.headingPoppins}`}
                        >
                          $0
                        </div>
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
                          setFormData({
                            ...formData,
                            investment_stage: "Startup level 1",
                          })
                        }
                        className={`${
                          formData.investment_stage === "Startup level 1" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Startup level 1
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_stage: "Startup level 2",
                          })
                        }
                        className={`${
                          formData.investment_stage === "Startup level 2" &&
                          style.selectTag
                        } ${style.investmentTag} ${globalStyle.headingPoppins}`}
                      >
                        Startup level 2
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            investment_stage: "Startup level 3",
                          })
                        }
                        className={`${
                          formData.investment_stage === "Startup level 3" &&
                          style.selectTag
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
                            setFormData({
                              ...formData,
                              investment_country: "Country 1",
                            });
                          }}
                          className={`${
                            formData.investment_country === "Country 1" &&
                            style.selectTag
                          } ${style.investmentTag} ${
                            globalStyle.headingPoppins
                          }`}
                        >
                          Country 1
                        </div>
                        <div
                          onClick={() => {
                            setFormData({
                              ...formData,
                              investment_country: "Country 2",
                            });
                          }}
                          className={`${
                            formData.investment_country === "Country 2" &&
                            style.selectTag
                          } ${style.investmentTag} ${
                            globalStyle.headingPoppins
                          }`}
                        >
                          Country 2
                        </div>
                        <div
                          onClick={() => {
                            setFormData({
                              ...formData,
                              investment_country: "Country 3",
                            });
                          }}
                          className={`${
                            formData.investment_country === "Country 3" &&
                            style.selectTag
                          } ${style.investmentTag} ${
                            globalStyle.headingPoppins
                          }`}
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
                            setFormData({
                              ...formData,
                              investment_city: "City Name 1",
                            });
                          }}
                          className={`${
                            formData.investment_city === "City Name 1" &&
                            style.selectTag
                          } ${style.investmentTag} ${
                            globalStyle.headingPoppins
                          }`}
                        >
                          City Name 1
                        </div>
                        <div
                          onClick={() => {
                            setFormData({
                              ...formData,
                              investment_city: "City Name 2",
                            });
                          }}
                          className={`${
                            formData.investment_city === "City Name 2" &&
                            style.selectTag
                          } ${style.investmentTag} ${
                            globalStyle.headingPoppins
                          }`}
                        >
                          City Name 2
                        </div>
                        <div
                          onClick={() => {
                            setFormData({
                              ...formData,
                              investment_city: "City Name 3",
                            });
                          }}
                          className={`${
                            formData.investment_city === "City Name 3" &&
                            style.selectTag
                          } ${style.investmentTag} ${
                            globalStyle.headingPoppins
                          }`}
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
                        toggle={
                          formData.investment_notification.desktop_notification
                        }
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            investment_notification: {
                              desktop_notification: e.target.checked,
                              email_notification:
                                formData.investment_notification
                                  .email_notification,
                              read_notification:
                                formData.investment_notification
                                  .read_notification,
                              updates_notification:
                                formData.investment_notification
                                  .updates_notification,
                            },
                          });
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
                        toggle={
                          formData.investment_notification.read_notification
                        }
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            investment_notification: {
                              desktop_notification:
                                formData.investment_notification
                                  .desktop_notification,
                              email_notification:
                                formData.investment_notification
                                  .email_notification,
                              read_notification: e.target.checked,
                              updates_notification:
                                formData.investment_notification
                                  .updates_notification,
                            },
                          });
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
                        toggle={
                          formData.investment_notification.email_notification
                        }
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            investment_notification: {
                              desktop_notification:
                                formData.investment_notification,
                              email_notification: e.target.checked,
                              read_notification:
                                formData.investment_notification
                                  .read_notification,
                              updates_notification:
                                formData.investment_notification
                                  .updates_notification,
                            },
                          });
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
                        toggle={
                          formData.investment_notification.updates_notification
                        }
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            investment_notification: {
                              desktop_notification:
                                formData.investment_notification,
                              email_notification:
                                formData.investment_notification
                                  .email_notification,
                              read_notification: e.target.checked,
                              updates_notification:
                                formData.investment_notification
                                  .updates_notification,
                            },
                          });
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
      )}
    </div>
  );
}

export default StartUp;
