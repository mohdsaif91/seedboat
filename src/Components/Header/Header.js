import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import userAvatar from "../../Images/icon/user.png";

import style from "./header.module.scss";

function Header() {
  const navigate = useNavigate();

  console.log(typeof JSON.parse(sessionStorage.getItem("loginData")), " <>?");
  return (
    <div className={style.headerContainer}>
      <div className={style.logo} onClick={() => navigate("/")}>
        Logo
      </div>
      <ul className={style.pageLinks}>
        <li className={style.pageLinkItem} onClick={() => navigate("/about")}>
          About
        </li>
        <li
          className={style.pageLinkItem}
          onClick={() => navigate("/investor")}
        >
          invest with us
        </li>
        <li
          className={style.pageLinkItem}
          onClick={() => navigate("/mentorList")}
        >
          Start a project
        </li>
        <li
          className={style.pageLinkItem}
          onClick={() => navigate("/mentorList")}
        >
          Mentorship
        </li>
      </ul>

      <div className={style.loginBtn}>
        {sessionStorage.getItem("loginData") === "" ||
        !sessionStorage.getItem("loginData") ? (
          <Button text="Log In/Sign up" onClick={() => navigate("/login")} />
        ) : (
          <img
            src={userAvatar}
            alt="login"
            className={style.avatarIcon}
            onClick={() => navigate("/updateprofile")}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
