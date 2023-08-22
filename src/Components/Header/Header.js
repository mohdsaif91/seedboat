import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./header.module.scss";
import Button from "../Button/Button";

function Header() {
  const navigate = useNavigate();
  return (
    <div className={style.headerContainer}>
      <div className={style.logo}>Logo</div>
      <ul className={style.pageLinks}>
        <li className={style.pageLinkItem}>About</li>
        <li className={style.pageLinkItem}>invest with us</li>
        <li className={style.pageLinkItem}>Start a project</li>
        <li className={style.pageLinkItem}>Mentorship</li>
      </ul>
      <div className={style.loginBtn}>
        <Button text="Log In/Sign up" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}

export default Header;
