import React from "react";
import { useNavigate } from "react-router-dom";

import { roleData, roleData2 } from "../../util";

import style from "./userRole.module.scss";

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
