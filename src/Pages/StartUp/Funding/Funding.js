import React, { useState } from "react";

import style from "./funding.module.scss";
import globalStyle from "../../../global.module.scss";
import parentStyle from "../startUp.module.scss";
import { Input } from "../../../Components/FormElements/Input/Input";
import RadioButton from "../../../Components/FormElements/RadioButton/RadioButton";
import Button from "../../../Components/Button/Button";

const initialFunding = {
  goalAmount: "",
  amountRaisedTillNow: "",
  funderInvestedTillNow: "",
  totalOutsiderInvestment: "",
  preferedInvestorType: "",
};

function Funding() {
  const [fundingForm, setFundingForm] = useState({ ...initialFunding });

  return (
    <div className={style.funcdingContainer}>
      <div
        className={`${parentStyle.pageHeading} ${globalStyle.headingPoppins}`}
      >
        Plan and manage your project’s finances.
      </div>
      <div className={parentStyle.formContainer}>
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Funding goal
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Goal amount
            </div>
            <Input
              withSymbol={true}
              symbol="$"
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={fundingForm.goalAmount}
              onChange={(e) =>
                setFundingForm({ ...fundingForm, goalAmount: e.target.value })
              }
              className={parentStyle.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Funding till date
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Amount Raised till now
            </div>
            <Input
              withSymbol={true}
              symbol="$"
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={fundingForm.amountRaisedTillNow}
              onChange={(e) =>
                setFundingForm({
                  ...fundingForm,
                  amountRaisedTillNow: e.target.value,
                })
              }
              className={parentStyle.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Founder Investment
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Founder Investment
            </div>
            <Input
              withSymbol={true}
              symbol="$"
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={fundingForm.funderInvestedTillNow}
              onChange={(e) =>
                setFundingForm({
                  ...fundingForm,
                  funderInvestedTillNow: e.target.value,
                })
              }
              className={parentStyle.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Total Outsider Investment
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Total Outsider Investment
            </div>
            <Input
              withSymbol={true}
              symbol="$"
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={fundingForm.totalOutsiderInvestment}
              onChange={(e) =>
                setFundingForm({
                  ...fundingForm,
                  totalOutsiderInvestment: e.target.value,
                })
              }
              className={parentStyle.basicInput}
            />
          </div>
        </div>
        <div
          className={`${globalStyle.horizontalDevider} ${parentStyle.deviderMargin}`}
        />
        <div className={parentStyle.formItemContainer}>
          <div className={parentStyle.labelContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${globalStyle.headingPoppins}`}
            >
              Total Outsider Investment
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Preferred Investor type:
            </div>
            <div className={style.radioBtnContainer}>
              <RadioButton
                radioContainerClass={style.basicRadioBtn}
                name="Individual"
                checked={fundingForm.preferedInvestorType}
                value="individual"
                onChange={(e) =>
                  setFundingForm({
                    ...fundingForm,
                    preferedInvestorType: e.target.value,
                  })
                }
              />
              <RadioButton
                radioContainerClass={style.basicRadioBtn}
                name="Venture Capitalist"
                checked={fundingForm.preferedInvestorType}
                value="ventureCapitalist"
                onChange={(e) =>
                  setFundingForm({
                    ...fundingForm,
                    preferedInvestorType: e.target.value,
                  })
                }
              />
            </div>
            <div className={style.radioBtnContainer}>
              <RadioButton
                radioContainerClass={style.basicRadioBtn}
                name="Family office"
                checked={fundingForm.preferedInvestorType}
                value="familyOffice"
                onChange={(e) =>
                  setFundingForm({
                    ...fundingForm,
                    preferedInvestorType: e.target.value,
                  })
                }
              />
              <RadioButton
                radioContainerClass={style.basicRadioBtn}
                name="Corporate"
                checked={fundingForm.preferedInvestorType}
                value="corporate"
                onChange={(e) =>
                  setFundingForm({
                    ...fundingForm,
                    preferedInvestorType: e.target.value,
                  })
                }
              />
            </div>
            <div className={style.radioBtnContainer}>
              <RadioButton
                radioContainerClass={style.basicRadioBtn}
                name="Any"
                checked={fundingForm.preferedInvestorType}
                value="any"
                onChange={(e) =>
                  setFundingForm({
                    ...fundingForm,
                    preferedInvestorType: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className={parentStyle.btnContainer}>
          <Button
            text="Next"
            className={parentStyle.basicNextBtn}
            onClick={() => console.log()}
          />
        </div>
      </div>
    </div>
  );
}

export default Funding;
