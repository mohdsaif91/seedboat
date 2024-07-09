import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import Step from "../../Components/Steps/Step";
import verticalImage from "../../Images/verticalImage.png";
import ServiceStep1 from "./ServiceStep1/ServiceStep1";
import Button from "../../Components/Button/Button";
import ServiceStep2 from "./ServiceStep2/ServiceStep2";

import style from "./serviceProvider.module.scss";
import globalStyle from "../../global.module.scss";
import commonStyle from "../../common.module.scss";
import PageLoader from "../../Components/PageLoader/PageLoader";

function ServiceProvider() {
  const [steps, setSteps] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const stepRef = useRef(null);

  useEffect(() => {
    if (!steps) {
      const sessionData = JSON.parse(
        sessionStorage.getItem("tabAndRoleService")
      );
      setSteps(!sessionData ? 1 : sessionData);
    }
  }, []);

  const stepCheck = () => {
    if (!stepRef.current.getServiceStepData()) {
      return false;
    } else if (steps === 1) {
      sessionStorage.setItem("tabAndRoleService", steps + 1);
      setSteps(2);
    } else if (steps === 2) {
      setLoading(true);
      const serviceStep1Data = JSON.parse(
        sessionStorage.getItem("serviceStep1data")
      );
      const serviceStep2Data = JSON.parse(
        sessionStorage.getItem("serviceStep2data")
      );
      const finalData = {
        ...serviceStep1Data,
        ...serviceStep2Data,
      };
      Axios.post(`${Axios.defaults.baseURL}/services/createservice`, finalData)
        .then((data) => {
          sessionStorage.removeItem("tabAndRoleService");
          setLoading(false);
          navigate("/serviceList");
        })
        .catch((err) => {
          setLoading(false);
          console.log("error in creating Service ", err);
        });
    }
  };

  return (
    <div className={style.serviceProviderContainer}>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <div className={style.leftContainer}>
            <div className={style.stepContainer}>
              <Step page={steps} totalSteps={[1, 2]} />
            </div>
            <div
              className={`${commonStyle.stepHeading} ${globalStyle.headingPoppins}`}
            >
              {steps === 1 ? (
                <>
                  Hello, <br />
                  Give your details .
                </>
              ) : (
                <>
                  Hello, What’s your
                  <br />
                  origin story?
                </>
              )}
            </div>
            <div className={style.step}>
              {steps === 1 ? (
                <ServiceStep1 ref={stepRef} />
              ) : (
                <ServiceStep2 ref={stepRef} />
              )}
            </div>

            <Button
              onClick={() => stepCheck()}
              className={style.nextBtn}
              text={steps === 1 ? "Next" : "Submit"}
            />
          </div>
          <div className={style.rightContainer}>
            <img src={verticalImage} alt="" className={style.verticalImg} />
            <div className={style.rightMainImage}>
              <div className={style.textContainer}>
                <div
                  className={`${style.mainText} ${globalStyle.headingPoppins}`}
                >
                  12,797+ mentors
                </div>
                <div
                  className={`${style.subText} ${globalStyle.subHeadingPoppins}`}
                >
                  Vivamus lacinia faucibus aliquam. Donec sodales rhoncus nisi,
                  eget ullamcorper sem convallis id. Quisque eleifend augue non
                  lectus malesuada posuere.
                </div>
                <div className={style.dashContainer}>
                  <div className={`${style.dash} ${style.active}`} />
                  <div className={style.dash} />
                  <div className={style.dash} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ServiceProvider;
