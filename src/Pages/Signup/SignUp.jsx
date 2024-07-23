import React, { useState } from "react";
import Axios from "axios";

import style from "./signup.module.scss";

const initialState = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [signUpData, setSignUpData] = useState({ ...initialState });

  const handleSignup = () => {
    const { confirmPassword, ...restProps } = signUpData;
    Axios.post(`${Axios.defaults.baseURL}/auth/register`, restProps)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.signupContainer}>
      <div className={style.inputContainer}>
        <input
          className={style.emailInput}
          type="email"
          placeholder="Enter your email"
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
        />
        <input
          className={style.emailInput}
          type="text"
          placeholder="User Name"
          value={signUpData.username}
          onChange={(e) =>
            setSignUpData({ ...signUpData, username: e.target.value })
          }
        />
      </div>
      <div className={style.inputContainer}>
        <input
          className={style.emailInput}
          type="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
        />
        <input
          className={style.emailInput}
          type="password"
          placeholder="confirm Password"
          value={signUpData.confirmPassword}
          onChange={(e) =>
            setSignUpData({ ...signUpData, confirmPassword: e.target.value })
          }
        />
      </div>
      <div className={style.btnContainer}>
        <button className={style.otpBtn} onClick={() => handleSignup()}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
