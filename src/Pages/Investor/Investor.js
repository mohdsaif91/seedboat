import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import HeadingAndSubHEading from "../../Components/HeadingAndSubHeading/HeadingAndSubHeading";
import VerticalDevider from "../../Components/VerticalDevider/VerticalDevider";
import Step from "../../Components/Steps/Step";
import { BlackBtn, WhiteBtn } from "../../Components/Button/Button";
import PageLoader from "../../Components/PageLoader/PageLoader";
import Step1 from "./InvestorSteps/Step1";
import Step2 from "./InvestorSteps/Step2";
import Step3 from "./InvestorSteps/Step3";

import style from "./investor.module.scss";
import globalStyle from "../../global.module.scss";

const initailFormData = {
  investor_type: "",
  company_name: "",
  company_website: "",
  company_establishment: "",
  fname: "",
  lname: "",
  email: "",
  phonenumber: "",
  user_city: "",
  user_country: "",
  user_profession: "job",
  user_service: "",
  user_gender: "",
  user_nationality: "",
  dob: new Date(),
  user_message: "",
  investor_experience: "",
  investment_interest: "",
  investment_size: "",
  investment_stage: "",
  investment_country: "",
  investment_city: "",
  investment_notification: {
    read_notification: false,
    desktop_notification: false,
    email_notification: false,
    updates_notification: false,
  },
};

function StartUp() {
  const [selected, setSelected] = useState(null);
  const [stepperPage, setStepperPage] = useState(null);
  const [formData, setFormData] = useState({ ...initailFormData });
  const [value, onChange] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step1Error, setStep1Error] = useState(false);
  const [step2Error, setStep2Error] = useState(false);
  const [step3Error, setStep3Error] = useState(false);
  const [apiStatus, setApiStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  useEffect(() => {
    if (!stepperPage) {
      const sessionData = JSON.parse(sessionStorage.getItem("tabAndrole"));
      setStepperPage(!sessionData ? { step: 1, role: null } : sessionData);
    }
  }, [stepperPage]);

  const showTab = () => {
    if (stepperPage.step === 1) {
      if (formData.investor_type === "") {
        setStep1Error(true);
      } else {
        setStepperPage({ ...stepperPage, step: 2, role: selected });
        sessionStorage.setItem(
          "tabAndrole",
          JSON.stringify({ step: 1, role: selected })
        );
        setStep1Error(false);
      }
    } else if (stepperPage.step === 2) {
      const {
        fname,
        lname,
        email,
        phonenumber,
        user_city,
        user_country,
        user_service,
        user_gender,
        user_nationality,
        dob,
        user_message,
      } = formData;
      if (
        fname === "" ||
        lname === "" ||
        phonenumber === "" ||
        user_city === "" ||
        user_country === "" ||
        user_service === "" ||
        user_gender === "" ||
        user_nationality === "" ||
        dob === "" ||
        user_message === ""
      ) {
        setStep2Error(true);
      } else {
        setStepperPage({ ...stepperPage, step: 3, role: selected });
        sessionStorage.setItem(
          "tabAndrole",
          JSON.stringify({ step: 3, role: selected })
        );
        setStep2Error(false);
      }
    } else {
      const {
        investor_experience,
        investment_interest,
        investment_size,
        investment_stage,
        investment_country,
        investment_city,
      } = formData;
      if (
        investor_experience === "" ||
        investment_interest === "" ||
        investment_size === "" ||
        investment_stage === "" ||
        investment_country === "" ||
        investment_city === ""
      ) {
        setStep3Error(true);
      } else {
        setLoading(true);
        Axios.post(
          `${Axios.defaults.baseURL}/investor/investorassign`,
          formData
        )
          .then((res) => {
            console.log(res, " <>?");
            setLoading(false);
            setStep3Error(false);
            sessionStorage.removeItem("tabAndrole");
            navigate("/investorAcknowledgMent", {
              state: {
                investorData: formData,
              },
            });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
    }
  };

  console.log(formData, " <>?");

  return (
    <div className={style.strtupContainer}>
      {loading ? (
        <PageLoader />
      ) : (
        <div className={globalStyle.primaryContainer}>
          <HeadingAndSubHEading
            heading="give us some of your details."
            subHeading="Curabitur mollis consectetur tortor. Proin at ornare dolor. Mauris lacinia, sem eu dictum tristique, lectus dui malesuada mi, sit amet mollis nulla quam a dui. Ut volutpat et ipsum vitae ullamcorper. Etiam auctor quis justo ac aliquet. Maecenas fringilla massa id aliquam luctus. Cras vitae finibus sem. Phasellus fermentum aliquam gravida."
          />
          <VerticalDevider color="#d4d4d4" />
          <div className={globalStyle.secondaryContainer}>
            <div className={style.setpParentContainer}>
              <Step page={stepperPage?.step} totalSteps={[1, 2, 3]} />
            </div>
            <div className={style.investorTypeContainer}>
              {stepperPage?.step === 1 ? (
                <Step1
                  formData={formData}
                  setFormData={setFormData}
                  error={step1Error}
                />
              ) : stepperPage?.step === 2 ? (
                <Step2
                  formData={formData}
                  setFormData={setFormData}
                  error={step2Error}
                />
              ) : (
                <Step3
                  formData={formData}
                  setFormData={setFormData}
                  error={step3Error}
                />
              )}
              <div
                className={`${globalStyle.btnContainerSpaceBtw} ${style.btnContainer}`}
              >
                <WhiteBtn text="skip" onClick={() => console.log()} />
                <BlackBtn
                  withIcon={true}
                  className={
                    selected === null &&
                    stepperPage?.step === 0 &&
                    globalStyle.notAllowed
                  }
                  text="Next"
                  onClick={(e) => {
                    selected === null && stepperPage?.step === 0
                      ? e.preventDefault()
                      : showTab();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartUp;
