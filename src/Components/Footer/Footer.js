import React from "react";

import facebook from "../../Images/icon/facebook.png";
import instagram from "../../Images/icon/instagram.png";
import twitter from "../../Images/icon/twitter.png";
import youtube from "../../Images/icon/youtube.png";

import style from "./footer.module.scss";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.containerOne}>
        <div className={style.logoConatiner}>LOGO</div>
        <div className={style.subHeadingFooter}>
          Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is simply
          free text quis bibendum.
        </div>
        <div className={style.socialMediaContainer}>
          <img alt src={instagram} className={style.socilaMediaItem} />
          <img alt src={facebook} className={style.socilaMediaItem} />
          <img alt src={twitter} className={style.socilaMediaItem} />
          <img alt src={youtube} className={style.socilaMediaItem} />
        </div>
      </div>
      <div className={style.containerTwo}>
        <div className={style.containerText}>For Startups</div>
        <div className={style.footerUnderline} />
        <div className={style.containerSubtext}>
          Vestibulum finibus Euismod tempus Mauris sit Craseu augue Donec
          porttitor
        </div>
      </div>
      <div className={style.containerTwo}>
        <div className={style.containerText}>For Services</div>
        <div className={style.footerUnderline} />
        <div className={style.containerSubtext}>
          Vestibulum finibus Euismod tempus Mauris sit Craseu augue
        </div>
      </div>
      <div className={style.containerTwo}>
        <div className={style.containerText}>For Co-founder</div>
        <div className={style.footerUnderline} />
        <div className={style.containerSubtext}>
          Vestibulum finibus Euismod tempus Mauris sit Craseu augue
        </div>
      </div>
      <div className={style.containerTwo}>
        <div className={style.containerText}>Comapany</div>
        <div className={style.footerUnderline} />
        <div className={style.containerSubtext}>
          Vestibulum finibus Euismod tempus Mauris sit Craseu augue Donec
          porttitor
        </div>
      </div>
    </div>
  );
}

export default Footer;
