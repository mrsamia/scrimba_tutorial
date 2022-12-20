import React, { useState } from "react";

function UserInfoForm(props) {
  const [userinput, setUserinput] = useState({
    name: "",
    roll: "",
    adress: "",
    number: "",
  });

  const [info, setInfo] = useState([]);


  function NameChangeHandler(event) {
    setUserinput({ ...userinput, name: event.target.value });
  }
  function RollChangeHandler(event) {
    setUserinput({ ...userinput, roll: event.target.value });
  }

  function AdressChangeHandler(event) {
    setUserinput({ ...userinput, adress: event.target.value });
  }

  function NumberChangeHandler(event) {
    setUserinput({ ...userinput, number: event.target.value });
  }


  function clickHandler() {
    setInfo([...info, userinput]);
    //another way
    // const a = info;
    // setInfo([...a, userinput]);
    setUserinput({
      name: "",
      roll: "",
      adress: "",
      number: "",
    });
  }


  const removecard = (index) => {
    console.log(index, "roll");
    const newinput = [...info];
    newinput.splice(index, 1);
    setInfo(newinput);
  };

  return (
    <div className="container pt-5 pb-5">
      <h6>Student Information</h6>
      <div>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          value={userinput.name}
          placeholder="Name"
          onChange={NameChangeHandler}
          required
        />
        <input
          type="number"
          name="roll"
          className="form-control mb-3"
          value={userinput.roll}
          placeholder="Roll"
          onChange={RollChangeHandler}
          required
        />
        <input
          type="text"
          name="address"
          className="form-control mb-3"
          value={userinput.adress}
          placeholder="Adress"
          onChange={AdressChangeHandler}
          required
        />
        <input
          type="number"
          name="number"
          className="form-control mb-3"
          value={userinput.number}
          placeholder="Phone Number"
          onChange={NumberChangeHandler}
          required
        />
        <button
          className="btn btn-danger ps-5 pe-5 pt-2 pb-2"
          onClick={clickHandler}
          disabled={userinput.name.length > 0 ? false : true}
        >
          Add info
        </button>
      </div>
      <div>
        {info.map((item,index) => (
          <div className="mt-4 pt-4 card" onClick={() => removecard(index)}>
            <p>Name: {item.name}</p>
            <p>Roll: {item.roll}</p>
            <p>Adress: {item.adress}</p>
            <p>Phone Number: {item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInfoForm;
