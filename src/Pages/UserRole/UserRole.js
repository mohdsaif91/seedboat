import React from "react";

import founder from "../../Images/founder.png";
import serviceProvider from "../../Images/serviceProvider.png";
import startUp from "../../Images/startUp.png";
import investor from "../../Images/investor.png";

import style from "./userRole.module.scss";
import { useNavigate } from "react-router-dom";

const roleData = [
  {
    img: startUp,
    label: "I am an Startup",
    path: "/startUp",
  },
  {
    img: investor,
    label: "I am an Investor",
    path: "/investor",
  },
];
const roleData2 = [
  {
    img: founder,
    label: "I am an Co-founder, CTO, CFO, CMO, HR",
    path: "/founder",
  },
  {
    img: serviceProvider,
    label: "I am an Service Provider",
    path: "/serviceProvider",
  },
];

function UserRole() {
  const navigate = useNavigate();

  return (
    <div className={style.userRoleContainer}>
      <div className={style.PageHeading}>
        Nunc eleifend, elit et iaculis pellentesque, felis arcu pretium neque.
      </div>
      <div className={style.roleContainer}>
        <div className={style.container}>
          {roleData.map((m) => (
            <div className={style.roleItem} onClick={() => navigate(m.path)}>
              <img className={style.roleImg} alt="" src={m.img} />
              <div className={style.roleLabel}>{m.label}</div>
            </div>
          ))}
        </div>
        <div className={style.container}>
          {roleData2.map((m) => (
            <div className={style.roleItem} onClick={() => navigate(m.path)}>
              <img className={style.roleImg} alt="" src={m.img} />
              <div className={style.roleLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserRole;
