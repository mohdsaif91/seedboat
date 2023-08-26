import React from "react";

import Button from "../../Components/Button/Button";
import info1 from "../../Images/info1.png";
import info2 from "../../Images/info2.png";
import info3 from "../../Images/info3.png";
import info4 from "../../Images/info4.png";
import info5 from "../../Images/info5.png";
import info6 from "../../Images/info6.png";
import firstImageQuote from "../../Images/firstImageQuote.png";
import secondImageQuote from "../../Images/secondImageQuote.png";
import blackWhiteImage from "../../Images/blackWhiteImage.png";
import blackImage from "../../Images/blackImage.png";

import style from "./startUp.module.scss";
import globalStyle from "../../global.module.scss";
import { useNavigate } from "react-router-dom";

function StartUp() {
  const navigate = useNavigate();
  return (
    <div className={style.startUpContainer}>
      <div className={style.primaryContainer}>
        <div
          className={`${style.startupPageHeading} ${globalStyle.headingPoppins}`}
        >
          Bring your creative project to life.
        </div>
        <Button
          onClick={() => navigate("/startUpOnboarding")}
          className={style.startProjectBtn}
          text="Start a Project"
        />
        <div className={style.startupInfoCards}>
          <div className={style.verticalTwoImage}>
            <img src={info1} alt="" className={style.infoImage} />
            <img src={info2} alt="" className={style.infoImage2} />
          </div>
          <img src={info3} alt="" className={style.infoImage} />
          <img src={info4} alt="" className={style.infoImage} />
          <div className={style.verticalTwoImage}>
            <img src={info5} alt="" className={style.infoImage} />
            <img src={info6} alt="" className={style.infoImage2} />
          </div>
        </div>
      </div>
      <div className={style.quoteContainer}>
        <img src={firstImageQuote} alt="" className={style.firstImage} />
        <div className={style.qouteMainContainer}>
          <img src={secondImageQuote} alt="" className={style.secondImage} />
          <div className={style.textContainer}>
            <div
              className={`${style.textHeading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex. Suspendisse semper molestie ultrices.
              Sed non diam vel nibh fringilla vehicula egestas vitae eros. Proin
              posuere sapien sit amet nibh ullamcorper fermentum. In scelerisque
              ligula vel tempus luctus. Quisque eros leo, pretium at nibh a,
              condimentum commodo est.
            </div>
            <div className={style.subHeading}>
              ~ <span className={style.personName}>ABCDE,</span> Founder
            </div>
          </div>
        </div>
      </div>
      <div className={style.imageBlackWhiteContainer}>
        <div className={style.whiteContainer} />
        <div className={style.blackContainer}>
          <div className={style.imageCardContainer}>
            <div className={style.parentImgecardContainer}>
              <img src={blackWhiteImage} alt="" className={style.cardImage} />
              <div className={style.infoCard}>
                <label className={style.infoCardLabel}>
                  Getting started as easy as 1-2-3
                </label>
                <div className={style.imageHeadingContainer}>
                  <label
                    className={`${style.heading} ${globalStyle.headingPoppins}`}
                  >
                    Heading of the STEP 1
                  </label>
                  <label
                    className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
                  >
                    In ac nulla at lectus vulputate euismod nec in enim. Vivamus
                    vitae posuere elit. Cras in augue sed velit aliquet
                    volutpat. Mauris a congue turpis. Sed eu dignissim nisi. In
                    eget gravida turpis, at faucibus risus.
                  </label>
                </div>
                <div className={style.imageHeadingContainer}>
                  <label
                    className={`${style.heading} ${globalStyle.headingPoppins}`}
                  >
                    Heading of the STEP 2
                  </label>
                  <label
                    className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
                  >
                    In sed odio in lorem blandit fringilla. Duis luctus
                    tincidunt metus aliquet pretium. Nunc commodo euismod risus
                    ut sodales. Phasellus consectetur euismod molestie. Nulla ut
                    enim aliquam, cursus eros ut, pharetra nisi. Vivamus et
                    libero neque.
                  </label>
                </div>
                <div className={style.imageHeadingContainer}>
                  <label
                    className={`${style.heading} ${globalStyle.headingPoppins}`}
                  >
                    Heading of the STEP 3
                  </label>
                  <label
                    className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
                  >
                    In ac nulla at lectus vulputate euismod nec in enim. Vivamus
                    vitae posuere elit. Cras in augue sed velit aliquet
                    volutpat. Mauris a congue turpis. Sed eu dignissim nisi. In
                    eget gravida turpis, at faucibus risus.
                  </label>
                </div>
              </div>
            </div>
            <div className={style.blackMainContainer}>
              <div className={style.leftContainer}>
                <div
                  className={`${style.heading} ${globalStyle.headingPoppins}`}
                >
                  Create a project in any of the categories
                </div>
                <div
                  className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
                >
                  Sed bibendum faucibus ante vitae tincidunt. Donec iaculis in
                  lorem vitae pellentesque. Phasellus rutrum libero vel lorem
                  fermentum viverra. Maecenas massa erat, pretium vitae augue
                  in, faucibus vehicula diam. Pellentesque maximus leo non nisl
                  commodo finibus. Praesent feugiat dapibus vehicula. Sed
                  bibendum faucibus ante vitae tincidunt. Donec iaculis in lorem
                  vitae pellentesque. Phasellus rutrum libero vel lorem
                  fermentum viverra. Maecenas massa erat, pretium vitae augue
                  in, faucibus vehicula diam. Pellentesque maximus leo non nisl
                  commodo finibus. Praesent feugiat dapibus vehicula.
                </div>
                <Button
                  className={style.enterInfoBtn}
                  text="Enter Information"
                  onClick={() => navigate("/startUpOnboarding")}
                />
              </div>
              <div className={style.rightContainer}>
                <img src={blackImage} alt="" className={style.blackImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartUp;
