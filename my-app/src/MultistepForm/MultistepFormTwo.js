import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function MultistepFormTwo(props) {
  const [form, setFom] = useState(2);

  function ClickHandler() {
    setFom(1);
  }

  function ClickHandler2() {
    setFom(2);
  }

  return (
    <div className="container pt-5 pb-5">
      <h2>Multistep Form WithOut using react Package</h2>
      <div className="pt-4 d-flex justify-content-between border-bottom">
        <h6 onClick={ClickHandler} className={form === 1 ? "green" : "black"}>
          StepOne
        </h6>
        <h6 onClick={ClickHandler2} className={form === 2 ? "green" : "black"}>
          StepTwo
        </h6>
      </div>

      <div>{form === 1 ? <StepOne /> : ""}</div>
      <div>{form === 2 ? <StepTwo /> : ""}</div>
    </div>
  );
}

export default MultistepFormTwo;
