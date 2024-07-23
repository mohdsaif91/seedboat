import React, { useState } from "react";
import Axios from "axios";

import PageLoader from "../../Components/PageLoader/PageLoader";
import { Input } from "../../Components/FormElements/Input/Input";
import Button from "../../Components/Button/Button";

import style from "./updateProfile.module.scss";

const initialData = {
  password: "",
  confirmPassword: "",
};

function UpdateProfile() {
  const [profileData, setProfileData] = useState({ ...initialData });
  const [loading, setLoading] = useState(false);

  const UpdateUserProfile = () => {
    setLoading(true);
    Axios.post(`${Axios.defaults.baseURL}/auth/user/userid`, {
      password: profileData.password,
    })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className={style.profileContainer}>
      {loading ? (
        <PageLoader />
      ) : (
        <div className={style.parentFormContainer}>
          <div className={style.formContainer}>
            <Input
              type="password"
              className={style.inputPassowrd}
              value={profileData.password}
              placeHolder="Password"
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  password: e.target.value,
                })
              }
            />
            <div className={style.gap} />
            <Input
              type="password"
              className={style.inputPassowrd}
              value={profileData.confirmPassword}
              placeHolder="consfirm Password"
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <div className={style.btnContainer}>
            <Button text="Update Profile" onClick={() => UpdateUserProfile()} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateProfile;
