import React, { useState } from 'react';
import ModalForm from './ModalForm';

function ModalFormTwo(props) {

    const [userinput, setUserinput] = useState({
        name: "",
        roll: "",
        address: "",
      });
      const [studentlist, setStudentlist] = useState([]);
    
      function nameChangeHandler(event) {
        setUserinput({ ...userinput, name: event.target.value });
      }
      function rollChangeHandler(event) {
        setUserinput({ ...userinput, roll: event.target.value });
      }
      function addressChangeHandler(event) {
        setUserinput({ ...userinput, address: event.target.value });
      }
      function ShowStudentList() {
        setStudentlist([...studentlist, userinput]);
      }
    
    
      const [show, setShow] = useState(false);
      function handleShow(){
        setShow(!show);
      }
      function handleClose()
      {
        setShow(!show);
      }
     
    return (
        <div className="bg-light  pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="row d-flex justify-content-center ">
            <div className="col-7  bg-white p-5 rounded-4">
              <div className="mb-3">
                <label className="form-label font">Student Name</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Student Name"
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label font">Roll</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Roll"
                  onChange={rollChangeHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label font">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  onChange={addressChangeHandler}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn sign-in-btn w-100"
                  onClick={ShowStudentList}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
  
          <div className="pt-5 pb-5">
            {studentlist.map((item) => (
              <div className="card mb-3" onClick={handleShow}>
                <p>
                  <span className="fw-bold">Student Name :</span> {item.name}
                </p>
                <p>
                  <span className="fw-bold">Roll :</span> {item.roll}
                </p>
                <p>
                  <span className="fw-bold">Address :</span> {item.address}
                </p>
  
                <h>
                  {show ? (
                    <ModalForm show={show} onHide={handleClose} name={item.name} roll={item.roll} address={item.address}/>
                  ) : (
                    ""
                  )}
                </h>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ModalFormTwo;