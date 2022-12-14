import React from "react";

function StepOne(props) {
  return (
    <div>
      Name:
      <p>
        <input
          placeholder="First name..."
          oninput="this.className = ''"
          name="fname"
        />
      </p>
      <p>
        <input
          placeholder="Last name..."
          oninput="this.className = ''"
          name="lname"
        />
      </p>
    </div>
  );
}

export default StepOne;
