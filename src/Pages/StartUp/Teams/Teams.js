import React, { useState } from "react";

import { Input } from "../../../Components/FormElements/Input/Input";
import Button, { BlackBtn } from "../../../Components/Button/Button";

import style from "./teams.module.scss";
import globalStyle from "../../../global.module.scss";
import parentStyle from "../startUp.module.scss";

const initialTeamForm = {
  founderName: "",
  founderEexperience: "",
  profile: "",
  directorName: "",
  directorExperience: "",
  registrationDetials: "",
  vatNumber: "",
};

function Teams() {
  const [teamForm, setTeamForm] = useState({ ...initialTeamForm });
  return (
    <div className={style.teamContainer}>
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
              Founder 1
            </div>
            <div
              className={`${parentStyle.sectionSubheading} ${globalStyle.subHeadingPoppins}`}
            >
              Pellentesque vitae pulvinar purus. Sed semper vel dui ut placerat.
              Phasellus tincidunt blandit elementum. Morbi a tortor id ipsum
              tempor consequat ut sed ex.
            </div>
            <BlackBtn className={style.addFounderBtn} text={`+ Add founder`} />
          </div>
          <div className={parentStyle.inputContainer}>
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Founder Name
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={teamForm.founderName}
              onChange={(e) =>
                setTeamForm({ ...teamForm, founderName: e.target.value })
              }
              className={parentStyle.basicInput}
            />
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Experience
            </div>
            <Input
              placeHolder="Eg. 5 Years"
              fullWidth={true}
              value={teamForm.founderEexperience}
              onChange={(e) =>
                setTeamForm({ ...teamForm, founderEexperience: e.target.value })
              }
              className={parentStyle.basicInput}
            />
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Profile
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={teamForm.profile}
              onChange={(e) =>
                setTeamForm({ ...teamForm, profile: e.target.value })
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
              Director
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
              Director’s Name
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={teamForm.directorName}
              onChange={(e) =>
                setTeamForm({ ...teamForm, directorName: e.target.value })
              }
              className={parentStyle.basicInput}
            />
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              Experience
            </div>
            <Input
              placeHolder="Eg. 5 Years"
              fullWidth={true}
              value={teamForm.directorExperience}
              onChange={(e) =>
                setTeamForm({ ...teamForm, directorExperience: e.target.value })
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
              Registered Firm
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
              Registration Details
            </div>
            <Input
              placeHolder="Eg. Pellentesque vitae pulvinar purus."
              fullWidth={true}
              value={teamForm.registrationDetials}
              onChange={(e) =>
                setTeamForm({
                  ...teamForm,
                  registrationDetials: e.target.value,
                })
              }
              className={parentStyle.basicInput}
            />
            <div
              className={`${parentStyle.sectionHeading} ${parentStyle.rightSectionHeading} ${globalStyle.headingPoppins}`}
            >
              VAT Number
            </div>
            <Input
              placeHolder="Eg. 5 Years"
              fullWidth={true}
              value={teamForm.vatNumber}
              onChange={(e) =>
                setTeamForm({ ...teamForm, vatNumber: e.target.value })
              }
              className={parentStyle.basicInput}
            />
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

export default Teams;
