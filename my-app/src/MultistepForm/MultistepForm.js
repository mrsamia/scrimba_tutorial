import React from "react";
import Multistep from "react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function MultistepForm(props) {
  const steps = [
    { title: "StepOne", component: <StepOne /> },
    { title: "StepTwo", component: <StepTwo /> },
  ];

  return (
    <div className="container d-flex justify-content-center">
      <div>
        <div>
          <h2>Multistep Form using react Package</h2>
        </div>
        <div>
          <Multistep activeStep={1} showNavigation={true} steps={steps} />
        </div>
      </div>
    </div>
  );
}

export default MultistepForm;
