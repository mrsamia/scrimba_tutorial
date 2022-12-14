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
      <Multistep activeStep={1} showNavigation={true} steps={steps} />
    </div>
  );
}

export default MultistepForm;
