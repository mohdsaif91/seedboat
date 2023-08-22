import React from "react";

import Button from "../../Components/Button/Button";
import rocket from "../../Images/icon/rocket.png";
import investment from "../../Images/icon/investment.png";
import mentorship from "../../Images/icon/mentorship.png";
import services from "../../Images/icon/services.png";
import DonateCard from "../../Components/DonateCard/DonateCard";
import SlideBtn from "../../Components/SlideButton/SlideBtn";
import {
  choosePlatformCardData,
  donateCardData,
  mentorsData,
  servicesData,
  startUpData,
} from "../../util";
import MentorCard from "../../Components/MentorCard/MentorCard";
import leftArraow from "../../Images/icon/leftArrow.png";
import rightArraow from "../../Images/icon/rightIcon.png";
import StratUpCard from "../../Components/StartUpCard/StratUpCard";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import ChoosePlatformCard from "../../Components/ChoosePlatformCard/ChoosePlatformCard";

import style from "./home.module.scss";

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.heroParentContainer}>
        <div className={style.heroContainer} />
        <div className={style.heroImageSecondary} />
        <div className={style.btnTextContainer}>
          <div className={style.heroText}>We can help you with Investment</div>
          <div className={style.heroBtnContainer}>
            <Button className={style.btn1} text="Start a Project" />
            <Button className={style.btn2} text="Speak with expert" />
          </div>
        </div>
      </div>
      <div className={style.containerOne}>
        <div className={style.textContainer}>
          <div className={style.textHeading}>What do we do</div>
          <p className={style.textSubheading}>
            Vivamus vehicula a lectus id tincidunt. Maecenas vel malesuada
            dolor. Etiam a quam ut ante scelerisque lobortis id finibus nibh.
            Mauris condimentum, nunc ut molestie lobortis, urna massa fringilla
            lacus, eget molestie dui augue ac metus. Maecenas imperdiet faucibus
            libero. Integer ac laoreet mauris. Nulla facilisi. In sollicitudin,
            magna ac auctor iaculis, metus lacus congue lacus, tincidunt
            vulputate mi libero in orci.
          </p>
        </div>
        <div className={style.servicesContainer}>
          <div className={style.serviceImageContainer}>
            <div className={style.serviceBackgroundImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="586"
                height="933"
                viewBox="0 0 586 933"
                fill="none"
              >
                <path
                  d="M441.264 2.26787C339.714 15.5133 245.476 92.7697 161.308 184.422C77.1618 276.158 3.00012 382.313 1.02187 490.164C-0.925434 597.961 69.257 707.424 160.635 758.25C252.013 809.076 364.555 801.319 481.182 835.541C597.831 869.847 718.557 946.271 824.542 930.794C930.504 915.233 1021.73 807.771 1031.49 696.475C1041.28 585.125 969.715 470.001 910.999 368.302C852.305 266.688 806.481 178.583 729.121 109.174C651.708 39.7344 542.814 -10.9776 441.264 2.26787Z"
                  fill="#1F80A3"
                  fill-opacity="0.2"
                />
              </svg>
            </div>
          </div>
          <div className={style.parentServiceCardContainer}>
            <div className={style.serviceCardContainer}>
              <div className={style.primaryServiceCards}>
                <div className={style.serviceCard}>
                  <img src={rocket} alt="" />
                  <div className={style.cardText}>Startup Funding</div>
                </div>
                <div className={style.serviceCard}>
                  <img src={investment} alt="" />
                  <div className={style.cardText}>Investment</div>
                </div>
              </div>
              <div className={style.secondaryServiceCards}>
                <div className={style.serviceCard}>
                  <img src={mentorship} alt="" />
                  <div className={style.cardText}>Mentorship</div>
                </div>
                <div className={style.serviceCard}>
                  <img src={services} alt="" />
                  <div className={style.cardText}>Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerTwo}>
        <div className={style.cardContainer}>
          {donateCardData.map((m) => (
            <DonateCard data={m} />
          ))}
        </div>
        <SlideBtn className={style.bottomBtn} />
      </div>
      <div className={style.containerThree}>
        <div className={style.containerThreeHeadingContainer}>
          <div className={style.heaing}>Our Mentors/Co-founder</div>
          <div className={style.dash} />
          <div className={style.subHeaingContainer}>
            <div className={style.heading}>
              Vivamus vehicula a lectus id tincidunt. Maecenas vel malesuada
              dolor. Etiam a quam ut ante scelerisque lobortis id finibus nibh.
              Mauris condimentum, nunc ut molestie lobortis, urna massa
              fringilla lacus, eget molestie dui augue ac metus. Maecenas
              imperdiet faucibus libero. Integer ac laoreet mauris.
            </div>
            <div>
              <Button type="secondary" text="Become Mentor" />
              <Button text="Explore Mentors" />
            </div>
          </div>
        </div>
        <div className={style.mentorCards}>
          {mentorsData.map((m) => (
            <MentorCard data={m} />
          ))}
        </div>
      </div>
      <div className={style.containerFour}>
        <div className={style.headingContainer}>
          <div className={style.heading}>Explore Start-ups</div>
          <div>
            <Button type="secondary" text="Become Investor" />
            <Button text="Explore Investor" />
          </div>
        </div>
        <div className={style.startUpCardContainer}>
          <img className={style.actionArrows} src={leftArraow} alt="" />
          <div className={style.startUpCards}>
            {startUpData.map((m) => (
              <StratUpCard data={m} />
            ))}
          </div>
          <img className={style.actionArrows} src={rightArraow} alt="" />
        </div>
      </div>
      <div className={style.containerFive}>
        <div className={style.headingContainer}>
          <div className={style.heading}>
            Empower your business with our services
          </div>
          <div>
            <Button type="secondary" text="Be Service Provider" />
            <Button text="Explore Services" />
          </div>
        </div>
        <div className={style.serviceCardConatiner}>
          <div className={style.serviceOfferCard}>
            {servicesData.map((m, i) => (
              <ServiceCard data={m} key={i} colorType={i} />
            ))}
          </div>
          <SlideBtn
            className={style.bottomBtnService}
            type="vertical"
            border={true}
            btn2Color="#71d5bd"
          />
        </div>
      </div>
      <div className={style.containerSix}>
        <div className={`${style.headingContainer}`}>
          <div className={`${style.heading} ${style.infoHeading}`}>
            Why Choose Our Platform
            <div className={style.infoHeadingUnderline} />
          </div>
        </div>
        <div className={style.choosePlatformContainer}>
          {choosePlatformCardData.map((m, i) => (
            <ChoosePlatformCard data={m} key={i} />
          ))}
        </div>
      </div>
      <div className={style.containerSeven}>
        <div className={style.blueBox} />
        <div className={style.middleBox}>
          <div className={style.heading}>Our Insights</div>
          <div className={style.subHeading}>
            Top 10 Absolute Tips to Optimize Your linkedIn Page
          </div>
          <div className={style.subHeadingParagraph}>
            Optimizing the pages is one method that has become highly common in
            every digital platfrom. How will you fell when you come to know that
            Linkedin page can be optimized too for better engagement?
          </div>
          <div className={style.keepReadingContainer}>
            <div className={style.keepReadingText}>KEEP READING</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="black" />
              <path
                d="M4 7.5C3.72386 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.72386 8.5 4 8.5V7.5ZM12.3536 8.35355C12.5488 8.15829 12.5488 7.84171 12.3536 7.64645L9.17157 4.46447C8.97631 4.2692 8.65973 4.2692 8.46447 4.46447C8.2692 4.65973 8.2692 4.97631 8.46447 5.17157L11.2929 8L8.46447 10.8284C8.2692 11.0237 8.2692 11.3403 8.46447 11.5355C8.65973 11.7308 8.97631 11.7308 9.17157 11.5355L12.3536 8.35355ZM4 8.5H12V7.5H4V8.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className={style.lastBox}>
          <div className={style.heading}>MORE NEWS</div>
          <ul className={style.lastBoxListContainer}>
            <li className={style.lastBoxItem}>
              Do you know how Google tracks your personal data?
              <div className={style.underline} />
            </li>
            <li className={style.lastBoxItem}>
              Why Companies should spend their Digital Marketing Budget after
              COVID 19
              <div className={style.underline} />
            </li>
            <li className={style.lastBoxItem}>
              Morbi ornare eros nec risus mollis, a tempor metus dapibus.
              <div className={style.underline} />
            </li>
            <li className={style.lastBoxItem}>
              Aenean bibendum laoreet lobortis. Nam lacus felis, efficitur.
              <div className={style.underline} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
