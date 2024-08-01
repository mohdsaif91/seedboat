import React from "react";

import ToggleButton from "../../../Components/ToggleButton/ToggleButton";

import style from "../investor.module.scss";
import globalStyle from "../../../global.module.scss";

function Step3({ formData, setFormData, error }) {
  return (
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
              formData.investor_experience === "New" && style.selectTag
            } ${style.investmentTag} ${globalStyle.headingPoppins} ${
              globalStyle.headingPoppins
            }`}
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
              formData.investor_experience === "0-5 Years" && style.selectTag
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
              formData.investor_experience === "05+ Years" && style.selectTag
            } ${style.investmentTag} ${globalStyle.headingPoppins}`}
          >
            05+ Years
          </div>
        </div>
        {error && formData.investor_experience === "" && (
          <div className={globalStyle.validationErrorText}>
            Investing Experience is required
          </div>
        )}
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
              formData.investment_interest === "Technology" && style.selectTag
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
              formData.investment_interest === "Education" && style.selectTag
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
              formData.investment_interest === "Fintech" && style.selectTag
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
              formData.investment_interest === "Health" && style.selectTag
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
              formData.investment_interest === "Games" && style.selectTag
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
              formData.investment_interest === "Wildlife" && style.selectTag
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
              formData.investment_interest === "Medical" && style.selectTag
            } ${style.investmentTag} ${globalStyle.headingPoppins}`}
          >
            Medical
          </div>
        </div>
        {error && formData.investment_interest === "" && (
          <div className={globalStyle.validationErrorText}>
            Investing Intrest is required
          </div>
        )}
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
              ${formData.investment_size}
            </div>
            <div
              className={`${style.rangeLabel} ${globalStyle.headingPoppins}`}
            >
              $10000+
            </div>
          </div>
        </div>
        {error &&
          (formData.investment_size === "" ||
            formData.investment_size === 0) && (
            <div className={globalStyle.validationErrorText}>
              Investing Size is required
            </div>
          )}
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
              formData.investment_stage === "Startup level 1" && style.selectTag
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
              formData.investment_stage === "Startup level 2" && style.selectTag
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
              formData.investment_stage === "Startup level 3" && style.selectTag
            } ${style.investmentTag} ${globalStyle.headingPoppins}`}
          >
            Startup level 3
          </div>
        </div>
        {error && formData.investment_stage === "" && (
          <div className={globalStyle.validationErrorText}>
            Investing Stage is required
          </div>
        )}
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
                formData.investment_country === "Country 1" && style.selectTag
              } ${style.investmentTag} ${globalStyle.headingPoppins}`}
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
                formData.investment_country === "Country 2" && style.selectTag
              } ${style.investmentTag} ${globalStyle.headingPoppins}`}
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
                formData.investment_country === "Country 3" && style.selectTag
              } ${style.investmentTag} ${globalStyle.headingPoppins}`}
            >
              Country 3
            </div>
          </div>
          {error && formData.investment_country === "" && (
            <div className={globalStyle.validationErrorText}>
              Country is required
            </div>
          )}
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
                formData.investment_city === "City Name 1" && style.selectTag
              } ${style.investmentTag} ${globalStyle.headingPoppins}`}
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
                formData.investment_city === "City Name 2" && style.selectTag
              } ${style.investmentTag} ${globalStyle.headingPoppins}`}
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
                formData.investment_city === "City Name 3" && style.selectTag
              } ${style.investmentTag} ${globalStyle.headingPoppins}`}
            >
              City Name 3
            </div>
          </div>
          {error && formData.investment_city === "" && (
            <div className={globalStyle.validationErrorText}>
              City is required
            </div>
          )}
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
            toggle={formData.investment_notification.desktop_notification}
            onChange={(e) => {
              setFormData({
                ...formData,
                investment_notification: {
                  desktop_notification: e.target.checked,
                  email_notification:
                    formData.investment_notification.email_notification,
                  read_notification:
                    formData.investment_notification.read_notification,
                  updates_notification:
                    formData.investment_notification.updates_notification,
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
            toggle={formData.investment_notification.read_notification}
            onChange={(e) => {
              setFormData({
                ...formData,
                investment_notification: {
                  desktop_notification:
                    formData.investment_notification.desktop_notification,
                  email_notification:
                    formData.investment_notification.email_notification,
                  read_notification: e.target.checked,
                  updates_notification:
                    formData.investment_notification.updates_notification,
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
            toggle={formData.investment_notification.email_notification}
            onChange={(e) => {
              setFormData({
                ...formData,
                investment_notification: {
                  desktop_notification: formData.investment_notification,
                  email_notification: e.target.checked,
                  read_notification:
                    formData.investment_notification.read_notification,
                  updates_notification:
                    formData.investment_notification.updates_notification,
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
            toggle={formData.investment_notification.updates_notification}
            onChange={(e) => {
              setFormData({
                ...formData,
                investment_notification: {
                  desktop_notification: formData.investment_notification,
                  email_notification:
                    formData.investment_notification.email_notification,
                  read_notification: e.target.checked,
                  updates_notification:
                    formData.investment_notification.updates_notification,
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Step3;
