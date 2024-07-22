import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

import linkedInBlue from "../../../Images/icon/linkedInBlue.png";
import message from "../../../Images/icon/message.png";
import star from "../../../Images/icon/Star 1.png";
import heart from "../../../Images/icon/heart 1.png";
import image55 from "../../../Images/icon/image 55.png";
import image57 from "../../../Images/icon/image 57.png";
import image58 from "../../../Images/icon/image 58.png";
import image59 from "../../../Images/icon/image 59.png";
import ContainerWithHeadingBtn from "../../../Components/ContainerWithHeadingBtn/ContainerWithHeadingBtn";
import { questionList } from "../../../util";
import Button from "../../../Components/Button/Button";
import PageLoader from "../../../Components/PageLoader/PageLoader";

import style from "./serviceDetails.module.scss";
import globalStyle from "../../../global.module.scss";
import commonStyle from "../../../common.module.scss";

function ServiceDetails() {
  const [loading, setLoading] = useState(false);
  const [companyData, setCompanyData] = useState();
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    if (state.serviceId && state.serviceId !== "") {
      setLoading(true);
      Axios.get(`${Axios.defaults.baseURL}/services/${state.serviceId}`)
        .then((res) => {
          console.log(res);
          setCompanyData(res.data.data[0]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, []);

  console.log(companyData, " <>?");

  return (
    <div className={style.serviceDetailsContainer}>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <div className={style.serviceDetailsHeader}>
            <div className={style.headingContainer}>
              <div
                className={`${style.mainHeading} ${globalStyle.headingPoppins}`}
              >
                {companyData?.company_name || ""}
              </div>
              <div
                className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
              >
                City Name, Country
              </div>
              <div className={style.reviewContainer}>
                <img src={star} alt="" />
                <span
                  className={`${style.subHeading} ${style.reviewSubHeading} ${globalStyle.subHeadingPoppins}`}
                >
                  5.0/4.5
                </span>
              </div>
            </div>
            <div className={style.iconContainer}>
              <img src={linkedInBlue} alt="" className={globalStyle.cp} />
              <img src={message} alt="" className={globalStyle.cp} />
              <img src={heart} alt="" className={globalStyle.cp} />
              <Button
                text="View Profile"
                onClick={() =>
                  navigate("/serviceProfile", {
                    state: {
                      serviceData: companyData,
                    },
                  })
                }
              />
            </div>
          </div>
          <div
            className={`${globalStyle.horizontalDevider} ${style.serviceDevider}`}
          />
          <div
            className={`${style.subHeading} ${globalStyle.subHeadingPoppins}`}
          >
            Quisque consequat hendrerit accumsan. Vivamus diam lacus, vulputate
            ac porta et, rutrum placerat mi. Fusce a erat sit amet enim
            consectetur consectetur. Morbi laoreet scelerisque massa vitae
            cursus. Pellentesque varius est vel blandit bibendum. Maecenas
            fringilla justo justo. Praesent efficitur tristique nisl, vitae
            bibendum mi consectetur eu. Sed non viverra ligula, convallis
            interdum dui.
          </div>
          <div className={style.serviceCardContainer}>
            <div className={style.serviceCard}>
              <img src={image55} alt="" />
              <div className={style.cardName}>Service Name</div>
              <div className={style.cardSubHeading}>
                Quisque consequat hendrerit accumsan. Vivamus diam lacus,
                vulputate ac porta et, rutrum placerat mi. Fusce a erat sit amet
                enim consectetur consectetur. Morbi laoreet scelerisque massa
                vitae cursus. Pellentesque varius est vel blandit bibendum.
              </div>
            </div>
            <div className={style.serviceCard}>
              <img src={image57} alt="" />
              <div className={style.cardName}>Service Name</div>
              <div className={style.cardSubHeading}>
                Quisque consequat hendrerit accumsan. Vivamus diam lacus,
                vulputate ac porta et, rutrum placerat mi. Fusce a erat sit amet
                enim consectetur consectetur. Morbi laoreet scelerisque massa
                vitae cursus. Pellentesque varius est vel blandit bibendum.
              </div>
            </div>
            <div className={style.serviceCard}>
              <img src={image58} alt="" />
              <div className={style.cardName}>Service Name</div>
              <div className={style.cardSubHeading}>
                Quisque consequat hendrerit accumsan. Vivamus diam lacus,
                vulputate ac porta et, rutrum placerat mi. Fusce a erat sit amet
                enim consectetur consectetur. Morbi laoreet scelerisque massa
                vitae cursus. Pellentesque varius est vel blandit bibendum.
              </div>
            </div>
            <div className={style.serviceCard}>
              <img src={image59} alt="" />
              <div className={style.cardName}>Service Name</div>
              <div className={style.cardSubHeading}>
                Quisque consequat hendrerit accumsan. Vivamus diam lacus,
                vulputate ac porta et, rutrum placerat mi. Fusce a erat sit amet
                enim consectetur consectetur. Morbi laoreet scelerisque massa
                vitae cursus. Pellentesque varius est vel blandit bibendum.
              </div>
            </div>
          </div>
          <ContainerWithHeadingBtn
            btnText="Message us"
            heading="Talk to us"
            onClick={() => navigate("/message")}
          />
          <div
            className={`${style.lastContainerHeading} ${globalStyle.headingPoppins}`}
          >
            In case you missed anything.
          </div>
          <ul className={style.quetsionContainer}>
            {questionList.map((m) => (
              <li className={commonStyle.questionItem}>
                <div
                  className={`${commonStyle.questionText} ${globalStyle.headingPoppins}`}
                >
                  {m}
                </div>
                <div className={commonStyle.iconContainer}>+</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ServiceDetails;
