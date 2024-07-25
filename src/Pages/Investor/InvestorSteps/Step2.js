import React from "react";

import { Input } from "../../../Components/FormElements/Input/Input";
import TextArea from "../../../Components/FormElements/TextArea/TextArea";
import SelectDropdown from "../../../Components/FormElements/SelectDropdown/SelectDropdown";

import style from "../investor.module.scss";
import globalStyle from "../../../global.module.scss";
import RadioButton from "../../../Components/FormElements/RadioButton/RadioButton";
import { actualJobType, gender } from "../../../util";

function Step2({ formData, setFormData, error }) {
  console.log(formData, " <>?");
  return (
    <div className={style.formContainer}>
      {formData.investor_type === "individual" ? (
        <>
          <div className={globalStyle.ItemContainer}>
            <div>
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
              {error && formData.fname === "" && (
                <div className={globalStyle.validationErrorText}>
                  First Name is required
                </div>
              )}
            </div>
            <div>
              <Input
                name="lastName"
                placeHolder="Last Name"
                value={formData.lname}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lname: e.target.value,
                  })
                }
              />
              {error && formData.lname === "" && (
                <div className={globalStyle.validationErrorText}>
                  Last Name is required
                </div>
              )}
            </div>
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
            <div className={globalStyle.fullWidth}>
              <SelectDropdown
                firstValue="Select from list"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    user_service: e.target.value,
                  })
                }
                onClick={(e) =>
                  setFormData({
                    ...formData,
                    user_service: e.target.value,
                  })
                }
                value={formData.user_service}
                optionData={actualJobType}
              />
              {error && formData.user_service === "" && (
                <div className={globalStyle.validationErrorText}>
                  User Service is required
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={globalStyle.ItemContainer}>
            <div>
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
              {error && formData.company_name === "" && (
                <div className={globalStyle.validationErrorText}>
                  Company Name is required
                </div>
              )}
            </div>
          </div>
          <div className={globalStyle.ItemContainer}>
            <div>
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
              {error && formData.company_website === "" && (
                <div className={globalStyle.validationErrorText}>
                  Company Website is required
                </div>
              )}
            </div>
          </div>
          <div className={globalStyle.ItemContainer}>
            <div>
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
              {error && formData.company_establishment === "" && (
                <div className={globalStyle.validationErrorText}>
                  Company EstablishMent is required
                </div>
              )}
            </div>
          </div>
        </>
      )}
      <div className={globalStyle.ItemContainer}>
        <div>
          <Input
            className={style.firstNameInput}
            name="city"
            placeHolder="City"
            value={formData.user_city}
            onChange={(e) =>
              setFormData({ ...formData, user_city: e.target.value })
            }
          />
          {error && formData.user_city === "" && (
            <div className={globalStyle.validationErrorText}>
              User City is required
            </div>
          )}
        </div>
        <div>
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
          {error && formData.user_country === "" && (
            <div className={globalStyle.validationErrorText}>
              user Country is required
            </div>
          )}
        </div>
      </div>
      <div className={globalStyle.ItemContainer}>
        <div>
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
          {error && formData.phonenumber === "" && (
            <div className={globalStyle.validationErrorText}>
              Phone Number is required
            </div>
          )}
        </div>
        <div>
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
          {error && formData.user_nationality === "" && (
            <div className={globalStyle.validationErrorText}>
              User Nationality is required
            </div>
          )}
        </div>
      </div>
      <div className={globalStyle.ItemContainer}>
        <div className={style.containerWidth}>
          <SelectDropdown
            className={style.genderDropdown}
            firstValue="Gender"
            value={formData.user_gender}
            optionData={gender}
            onChange={(e) =>
              setFormData({
                ...formData,
                user_gender: e.target.value,
              })
            }
            onClick={(e) =>
              setFormData({
                ...formData,
                user_gender: e.target.value,
              })
            }
          />
          {console.log(formData.user_gender)}
          {error && formData.user_gender === "" && (
            <div className={globalStyle.validationErrorText}>
              Gender is required
            </div>
          )}
        </div>
        <div>
          <Input
            name="dob"
            placeHolder="DOB ( DD/MM/YYYY)"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          {error && formData.dob === "" && (
            <div className={globalStyle.validationErrorText}>
              DOB is required
            </div>
          )}
        </div>
      </div>
      <div className={globalStyle.ItemContainer}>
        <div>
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
          {error && formData.user_message === "" && (
            <div className={globalStyle.validationErrorText}>
              User Message is required
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step2;
