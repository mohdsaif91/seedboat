import React from "react";
import { Input } from "../../../../Components/FormElements/Input/Input";

import style from "../startUpOnboarding.module.scss";
import globalStyle from "../../../../global.module.scss";

function Step4({ formError = false, onBoardingForm, setOnBoardingForm }) {
  return (
    <div className={style.fundingAmountStep}>
      <Input
        type="number"
        value={onBoardingForm.prjctFndAvailableTime}
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            prjctFndAvailableTime: parseInt(e.target.value),
          })
        }
        className={style.startUpInput}
        placeHolder="Funds availabel till now:"
      />
      {formError && onBoardingForm.prjctFndAvailableTime === "" && (
        <div className={globalStyle.validationErrorText}>
          Funds availabel till now is required
        </div>
      )}
      <Input
        type="number"
        value={onBoardingForm.prjctFndReqrd}
        className={style.startUpInput}
        placeHolder="Funds required:"
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            prjctFndReqrd: parseInt(e.target.value),
          })
        }
      />
      {formError && onBoardingForm.prjctFndReqrd === "" && (
        <div className={globalStyle.validationErrorText}>
          Funds required is required
        </div>
      )}
      <Input
        value={onBoardingForm.prjctFundTime}
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            prjctFundTime: e.target.value,
          })
        }
        className={style.startUpInput}
        placeHolder="Time available:"
      />
      {formError && onBoardingForm.prjctFundTime === "" && (
        <div className={globalStyle.validationErrorText}>
          Time available is required
        </div>
      )}
      <Input
        type="number"
        value={onBoardingForm.projectFndMinimum}
        className={style.startUpInput}
        placeHolder="Minimum Funding:"
        onChange={(e) =>
          setOnBoardingForm({
            ...onBoardingForm,
            projectFndMinimum: e.target.value,
          })
        }
      />
      {formError && onBoardingForm.projectFndMinimum === "" && (
        <div className={globalStyle.validationErrorText}>
          Minimum Funding is required
        </div>
      )}
    </div>
  );
}

export default Step4;
