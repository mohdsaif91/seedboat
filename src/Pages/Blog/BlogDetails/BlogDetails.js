import React, { useState } from "react";

import blogImg2 from "../../../Images/addBlog2.png";
import ContainerWithHeadingBtn from "../../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";
import instagram from "../../../Images/icon/instagramb.png";
import facebook from "../../../Images/icon/facebookb.png";
import twitter from "../../../Images/icon/twitterb.png";

import style from "./blogDetails.module.scss";
import globalStyle from "../../../global.module.scss";
import { useNavigate } from "react-router-dom";

function BlogDetails() {
  const [navLink, setNavLink] = useState("How to get funding");
  const navigate = useNavigate();
  return (
    <>
      <div className={style.BlogDetailsContainer}>
        <div className={style.heroImage} />
        <div className={style.primayContainer}>
          <div className={style.leftNavContainer}>
            <ul className={style.navLinkContainer}>
              <li
                onClick={() => setNavLink("How to get funding")}
                className={`${style.navItem} ${globalStyle.headingPoppins} ${
                  navLink === "How to get funding" && style.navLinkActive
                }`}
              >
                {navLink === "How to get funding" && (
                  <span className={style.addRMargin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                    >
                      <ellipse
                        cx="3"
                        cy="3.28157"
                        rx="3"
                        ry="3.00093"
                        fill="black"
                      />
                    </svg>
                  </span>
                )}
                How to get funding
              </li>
              <li
                onClick={() => setNavLink("Reach Investors")}
                className={`${style.navItem} ${globalStyle.headingPoppins} ${
                  navLink === "Reach Investors" && style.navLinkActive
                }`}
              >
                {navLink === "Reach Investors" && (
                  <span className={style.addRMargin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                    >
                      <ellipse
                        cx="3"
                        cy="3.28157"
                        rx="3"
                        ry="3.00093"
                        fill="black"
                      />
                    </svg>
                  </span>
                )}
                Reach Investors
              </li>
              <li
                onClick={() => setNavLink("Incubation")}
                className={`${style.navItem} ${globalStyle.headingPoppins} ${
                  navLink === "Incubation" && style.navLinkActive
                }`}
              >
                {navLink === "Incubation" && (
                  <span className={style.addRMargin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                    >
                      <ellipse
                        cx="3"
                        cy="3.28157"
                        rx="3"
                        ry="3.00093"
                        fill="black"
                      />
                    </svg>
                  </span>
                )}
                Incubation
              </li>
              <li
                onClick={() => setNavLink("Conclusion")}
                className={`${style.navItem} ${globalStyle.headingPoppins} ${
                  navLink === "Conclusion" && style.navLinkActive
                }`}
              >
                {navLink === "Conclusion" && (
                  <span className={style.addRMargin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                    >
                      <ellipse
                        cx="3"
                        cy="3.28157"
                        rx="3"
                        ry="3.00093"
                        fill="black"
                      />
                    </svg>
                  </span>
                )}
                Conclusion
              </li>
            </ul>
          </div>
          <div className={style.mainContainer}>
            <div
              className={`${style.pageHeading} ${globalStyle.headingPoppins}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis mauris nec.
            </div>
            <div className={style.nameTimeContainer}>
              <div
                className={`${style.nameContainer} ${globalStyle.headingPoppins}`}
              >
                <span className={style.addRMargin}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="7"
                    viewBox="0 0 6 7"
                    fill="none"
                  >
                    <ellipse
                      cx="3"
                      cy="3.28157"
                      rx="3"
                      ry="3.00093"
                      fill="black"
                    />
                  </svg>
                </span>
                Akhil Chandran
              </div>
              <div className={style.timeContainer}>
                <div
                  className={`${style.mainText} ${globalStyle.subHeadingPoppins}`}
                >
                  <span
                    className={`${globalStyle.headingPoppins} ${style.boldName}`}
                  >
                    16 min reading
                  </span>
                  Jan 24, 2023
                </div>
              </div>
            </div>
            <div className={style.lableValueContainer}>
              <div className={style.container}>
                <div
                  className={`${style.headingLabel} ${style.mainHeading} ${globalStyle.headingPoppins}`}
                >
                  How to get funding
                </div>
                <div
                  className={`${style.label} ${globalStyle.subHeadingPoppins}`}
                >
                  Donec consequat metus quis elit gravida luctus. Proin dolor
                  ipsum, sodales ac gravida quis, faucibus eget nunc. Cras
                  vestibulum ac diam ac ornare. Suspendisse fermentum elit quis
                  imperdiet fermentum. Nulla interdum dolor vitae est fringilla,
                </div>
              </div>
              <div className={style.container}>
                <div
                  className={`${style.headingLabel} ${style.mainHeading} ${globalStyle.headingPoppins}`}
                >
                  Start your funding
                </div>
                <div
                  className={`${style.label} ${globalStyle.subHeadingPoppins}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  euismod, turpis ac dignissim accumsan, ante justo facilisis
                  orci, in tristique velit est ut metus. Pellentesque tristique
                  eget enim eu iaculis. Ut scelerisque, erat a aliquet maximus,
                  tellus purus pellentesque ex, non maximus augue tellus et
                  quam. Quisque ligula nulla, suscipit sit amet ornare in,
                  scelerisque sed ligula. Maecenas euismod, libero quis
                  facilisis feugiat, sem ipsum pharetra magna, efficitur
                  bibendum felis dolor ornare enim. Phasellus eu efficitur nisl.
                  Nulla nec ex convallis, varius ligula nec, luctus nisi..
                  Vestibulum sed dui bibendum, malesuada sapien a, congue mi.
                  Pellentesque blandit, justo sed bibendum cursus, enim risus
                  molestie ante, a elementum nunc tortor pharetra magna. Donec
                  arcu eros, tempus a pretium vitae, efficitur eu metus.
                </div>
                <img src={blogImg2} alt="" className={style.blogImg} />
              </div>
              <div className={style.container}>
                <div
                  className={`${style.headingLabel} ${style.mainHeading} ${globalStyle.headingPoppins}`}
                >
                  Reach Investors
                </div>
                <div
                  className={`${style.label} ${globalStyle.subHeadingPoppins}`}
                >
                  <span>
                    Curabitur vel libero quam. Donec lacus risus, volutpat sed
                    congue in, porta quis orci. Sed tincidunt erat eros, a
                    posuere odio convallis ut. Nunc pellentesque quam nec nisi
                    iaculis, non faucibus erat dictum. Nunc turpis diam,
                    eleifend ac sem id, congue iaculis tortor. Maecenas laoreet,
                    leo bibendum pretium congue, metus lectus sollicitudin nisl,
                    in vehicula diam orci at massa. Morbi aliquam fringilla
                    enim, a auctor felis pellentesque sed.
                  </span>
                  <span className={style.wordBreak}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla euismod, turpis ac dignissim accumsan, ante justo
                    facilisis orci, in tristique velit est ut metus.
                    Pellentesque tristique eget enim eu iaculis. Ut scelerisque,
                    erat a aliquet maximus, tellus purus pellentesque ex, non
                    maximus augue tellus et quam. Quisque ligula nulla, suscipit
                    sit amet ornare in, scelerisque sed ligula. Maecenas
                    euismod, libero quis facilisis feugiat, sem ipsum pharetra
                    magna, efficitur bibendum felis dolor ornare enim.
                  </span>
                </div>
              </div>
              <div className={style.container}>
                <div
                  className={`${style.headingLabel} ${style.mainHeading} ${globalStyle.headingPoppins}`}
                >
                  Incubation
                </div>
                <div
                  className={`${style.label} ${globalStyle.subHeadingPoppins}`}
                >
                  <span>
                    Curabitur vel libero quam. Donec lacus risus, volutpat sed
                    congue in, porta quis orci. Sed tincidunt erat eros, a
                    posuere odio convallis ut. Nunc pellentesque quam nec nisi
                    iaculis, non faucibus erat dictum. Nunc turpis diam,
                    eleifend ac sem id, congue iaculis tortor. Maecenas laoreet,
                    leo bibendum pretium congue, metus lectus sollicitudin nisl,
                    in vehicula diam orci at massa. Morbi aliquam fringilla
                    enim, a auctor felis pellentesque sed.
                  </span>
                  <span className={style.wordBreak}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla euismod, turpis ac dignissim accumsan, ante justo
                    facilisis orci, in tristique velit est ut metus.
                    Pellentesque tristique eget enim eu iaculis. Ut scelerisque,
                    erat a aliquet maximus, tellus purus pellentesque ex, non
                    maximus augue tellus et quam. Quisque ligula nulla, suscipit
                    sit amet ornare in, scelerisque sed ligula. Maecenas
                    euismod, libero quis facilisis feugiat, sem ipsum pharetra
                    magna, efficitur bibendum felis dolor ornare enim.
                  </span>
                </div>
              </div>
              <div className={style.container}>
                <div
                  className={`${style.headingLabel} ${style.mainHeading} ${globalStyle.headingPoppins}`}
                >
                  Conclusion
                </div>
                <div
                  className={`${style.label} ${globalStyle.subHeadingPoppins}`}
                >
                  <span>
                    Curabitur vel libero quam. Donec lacus risus, volutpat sed
                    congue in, porta quis orci. Sed tincidunt erat eros, a
                    posuere odio convallis ut. Nunc pellentesque quam nec nisi
                    iaculis, non faucibus erat dictum. Nunc turpis diam,
                    eleifend ac sem id, congue iaculis tortor. Maecenas laoreet,
                    leo bibendum pretium congue, metus lectus sollicitudin nisl,
                    in vehicula diam orci at massa. Morbi aliquam fringilla
                    enim, a auctor felis pellentesque sed.
                  </span>
                </div>
              </div>
              <div className={globalStyle.horizontalDevider} />
            </div>
            <div className={style.socialMedaiContainer}>
              <div className={`${style.heading} ${globalStyle.headingPoppins}`}>
                SHARE ARTICLE
              </div>
              <div className={style.iconList}>
                <img src={instagram} alt="" className={style.icon} />
                <img src={facebook} alt="" className={style.icon} />
                <img src={twitter} alt="" className={style.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerWithHeadingBtn
        className={globalStyle.rmMargin}
        heading="Add your blog"
        subHeading="Donec consequat metus quis elit gravida luctus. Proin dolor ipsum, sodales ac gravida quis, faucibus eget nunc. Cras vestibulum ac diam ac ornare. Suspendisse fermentum elit."
        btnText="+ Add Blog"
        onClick={() => navigate("/addBlog")}
      />
    </>
  );
}

export default BlogDetails;
