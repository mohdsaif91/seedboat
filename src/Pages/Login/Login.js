import React, { useEffect, useState } from "react";

import style from "./login.module.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(0);
  const [sendOtp, setSendOtp] = useState({
    flag: false,
    data: {
      first: null,
      two: null,
      three: null,
      four: null,
    },
  });
  const [counter, setCounter] = useState(120);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  let incremental = 120;

  const startTimer = () => {
    if (counter >= 0) {
      setProgress(Math.trunc(((120 - incremental) / 120) * 100));
      incremental = incremental - 1;
      setCounter((state) => state - 1);
      setTimeout(startTimer, 1000);
    } else {
      setProgress(100);
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.imagParentContainer}>
        <div className={style.imagContainer}>
          <div className={style.imageTextContainer}>
            <div className={style.imageText}>
              Aliquam auctor enim in tortor luctus, eu faucibus velit mattis.
              Phasellus sed bibendum justo. Suspendisse felis lorem, maximus sit
              amet imperdiet ut, molestie quis nunc.
            </div>
            <div className={style.dashContainer}>
              <div
                className={`${style.imageDash} ${active === 0 && style.active}`}
              />
              <div
                className={`${style.imageDash} ${active === 1 && style.active}`}
              />
              <div
                className={`${style.imageDash} ${active === 2 && style.active}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.formContainer}>
        <div className={style.loginHeading}>Welcome Back</div>
        <div className={style.loginSubHeading}>
          Please enter your details to sign in.
        </div>
        <div className={style.btnContainer}>
          <button className={style.loginbtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0 0.177979)"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.04 12.4394C23.04 11.624 22.9668 10.8399 22.8309 10.0872H12V14.5356H18.1891C17.9225 15.9731 17.1123 17.191 15.8943 18.0065V20.8919H19.6109C21.7855 18.8899 23.04 15.9417 23.04 12.4394Z"
                fill="#4285F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 23.6778C15.105 23.6778 17.7081 22.648 19.6109 20.8917L15.8943 18.0062C14.8645 18.6962 13.5472 19.1039 12 19.1039C9.00474 19.1039 6.46951 17.081 5.56519 14.3628H1.72314V17.3423C3.61542 21.1007 7.50451 23.6778 12 23.6778Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.56523 14.363C5.33523 13.673 5.20455 12.9359 5.20455 12.178C5.20455 11.42 5.33523 10.683 5.56523 9.99297V7.01343H1.72318C0.944318 8.56593 0.5 10.3223 0.5 12.178C0.5 14.0337 0.944318 15.79 1.72318 17.3425L5.56523 14.363Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 5.25184C13.6884 5.25184 15.2043 5.83207 16.3961 6.97161L19.6945 3.67321C17.7029 1.81752 15.0997 0.677979 12 0.677979C7.50451 0.677979 3.61542 3.25502 1.72314 7.01343L5.56519 9.99298C6.46951 7.2748 9.00474 5.25184 12 5.25184Z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button className={`${style.loginbtn} ${style.appleBtn}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_451_534)">
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 0.716553)"
                  fill="black"
                />
                <path
                  d="M21.2806 19.1405C20.9327 19.9441 20.521 20.6837 20.044 21.3638C19.3938 22.2909 18.8614 22.9326 18.4511 23.2889C17.815 23.8738 17.1336 24.1734 16.4039 24.1904C15.88 24.1904 15.2482 24.0414 14.5128 23.739C13.775 23.438 13.0969 23.2889 12.4769 23.2889C11.8267 23.2889 11.1293 23.438 10.3834 23.739C9.63638 24.0414 9.03456 24.1989 8.57444 24.2146C7.87466 24.2444 7.17716 23.9363 6.48093 23.2889C6.03656 22.9013 5.48075 22.2369 4.8149 21.2956C4.10051 20.2905 3.51317 19.1249 3.05304 17.7961C2.56026 16.3607 2.31323 14.9708 2.31323 13.6252C2.31323 12.0839 2.6463 10.7544 3.31342 9.6404C3.83772 8.74556 4.53522 8.03968 5.4082 7.52148C6.28118 7.00329 7.22443 6.73922 8.24024 6.72233C8.79605 6.72233 9.52493 6.89426 10.4307 7.23215C11.3339 7.57117 11.9139 7.7431 12.1681 7.7431C12.3582 7.7431 13.0025 7.54207 14.0947 7.14129C15.1275 6.76961 15.9992 6.61571 16.7133 6.67633C18.6484 6.8325 20.1022 7.59531 21.069 8.96959C19.3384 10.0182 18.4823 11.4869 18.4993 13.371C18.515 14.8385 19.0474 16.0598 20.0937 17.0294C20.5679 17.4795 21.0974 17.8273 21.6866 18.0743C21.5588 18.4449 21.4239 18.7998 21.2806 19.1405ZM16.8425 1.67668C16.8425 2.82695 16.4223 3.90094 15.5847 4.89502C14.5738 6.07679 13.3512 6.75967 12.0253 6.65191C12.0084 6.51392 11.9986 6.36868 11.9986 6.21606C11.9986 5.11181 12.4793 3.93005 13.333 2.96379C13.7592 2.47456 14.3013 2.06777 14.9586 1.74327C15.6145 1.42361 16.2349 1.24683 16.8184 1.21655C16.8354 1.37032 16.8425 1.52411 16.8425 1.67667V1.67668Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_451_534">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.716553)"
                  />
                </clipPath>
              </defs>
            </svg>
            Apple
          </button>
        </div>
        <div className={style.dashContainer}>
          <div className={style.formDash} />
          OR
          <div className={style.formDash} />
        </div>
        <div className={style.emailInputContainer}>
          <input
            className={style.emailInput}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className={style.otpBtn}
          onClick={() => {
            startTimer();
            setSendOtp({ ...sendOtp, flag: true });
          }}
        >
          Send OTP
        </button>
        <div className={style.subHeadingContainer}>
          <div className={style.loginSubHeading}>
            If you don’t have an account register
          </div>
          <div className={style.loginSubHeading}>
            You can <span className={style.mainText}>Register here !</span>
          </div>
        </div>
      </div>
      {sendOtp.flag && (
        <div className={style.optModalContainer}>
          <div className={style.otpContainer}>
            <div className={style.modalHeading}>Enter your OTP</div>
            <div className={style.modalSubHeading}>
              Please enter the one time password sent to abc***@gmail.com.{" "}
              <span className={style.modalBoald}>Change</span>
            </div>
            <div className={style.inputContainer}>
              <input
                type="number"
                value={sendOtp.data.first}
                className={style.inputItem}
                onChange={(e) => {
                  setSendOtp({
                    sendOtp,
                    first: e.target.value,
                  });
                }}
              />
              <input
                type="number"
                value={sendOtp.data.first}
                className={style.inputItem}
                onChange={(e) => {
                  setSendOtp({
                    sendOtp,
                    first: e.target.value,
                  });
                }}
              />
              <input
                type="number"
                value={sendOtp.data.first}
                className={style.inputItem}
                onChange={(e) => {
                  setSendOtp({
                    sendOtp,
                    first: e.target.value,
                  });
                }}
              />
              <input
                type="number"
                value={sendOtp.data.first}
                className={style.inputItem}
                onChange={(e) => {
                  setSendOtp({
                    sendOtp,
                    first: e.target.value,
                  });
                }}
              />
            </div>
            <div className={style.timerIndicator}>
              <div className={style.modalProgressBar}>
                <div
                  className={style.progressBar}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className={style.countdown}>{counter} seconds left</div>
            </div>
            <div className={style.resendLabel}>
              Not received your code?{" "}
              <span className={style.modalBoald}>Resend Code</span>
            </div>
            <button
              className={style.submitOtpBtn}
              onClick={() => navigate("/userRole")}
            >
              Submit OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
