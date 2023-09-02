import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import arrow from "../../Images/icon/Arrow 2 (1).png";
import { BlackBtn } from "../../Components/Button/Button";
import { blogCardData } from "../../util";
import BlogCard from "../../Components/Card/BlogCard/BlogCard";
import ContainerWithHeadingBtn from "../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";

import style from "./blog.module.scss";
import globalStyle from "../../global.module.scss";

function Blog() {
  const [tabName, setTabName] = useState("Success Stories");

  const navigate = useNavigate();

  return (
    <>
      <div className={style.blogContainer}>
        <div className={style.blogHeader}>
          <div className={style.tabContainer}>
            <div
              className={`${style.tab} ${globalStyle.headingPoppins} ${
                tabName === "Success Stories" && style.active
              }`}
              onClick={() => setTabName("Success Stories")}
            >
              Success Stories
            </div>
            <div
              className={`${style.tab} ${globalStyle.headingPoppins} ${
                tabName === "Blog" && style.active
              }`}
              onClick={() => setTabName("Blog")}
            >
              Blog
            </div>
          </div>
          <BlackBtn
            className={style.allCompaniesBtn}
            icon={arrow}
            text="All Companies"
            withIcon={true}
          />
        </div>
        <div className={style.blogCardContainer}>
          {blogCardData.map((m, i) => (
            <BlogCard
              onClick={() => navigate("/blogDetails")}
              date={m.date}
              title={m.title}
              img={m.img}
              key={i}
            />
          ))}
        </div>
        <div className={style.btnContainer}>
          <BlackBtn
            className={style.allCompaniesBtn}
            icon={arrow}
            text="Load More"
            withIcon={true}
          />
        </div>
      </div>
      <ContainerWithHeadingBtn
        className={style.rmMargin}
        heading="Add your blog"
        subHeading="Donec consequat metus quis elit gravida luctus. Proin dolor ipsum, sodales ac gravida quis, faucibus eget nunc. Cras vestibulum ac diam ac ornare. Suspendisse fermentum elit."
        btnText="+ Add Blog"
        onClick={() => navigate("/addBlog")}
      />
    </>
  );
}

export default Blog;
