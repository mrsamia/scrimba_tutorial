import React from "react";

function StepOne(props) {
  return (
    <div>
      Contact Info:
      <p>
        <input
          placeholder="E-mail..."
          oninput="this.className = ''"
          name="email"
        />
      </p>
      <p>
        <input
          placeholder="Phone..."
          oninput="this.className = ''"
          name="phone"
        />
      </p>
    </div>
  );
}

export default StepOne;
