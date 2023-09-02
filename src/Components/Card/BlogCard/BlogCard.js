import React from "react";

import style from "./blogCard.module.scss";
import globalStyle from "../../../global.module.scss";

function BlogCard({ img, date, title, onClick }) {
  return (
    <div
      className={`${style.blogCardContaimer} ${globalStyle.cp}`}
      onClick={onClick}
    >
      <img src={img} alt="" className={style.cardImage} />
      <div className={`${style.cardDate} ${globalStyle.subHeadingPoppins}`}>
        {date}
      </div>
      <div className={`${style.cardTitle} ${globalStyle.headingPoppins}`}>
        {title}
      </div>
    </div>
  );
}

export default BlogCard;
