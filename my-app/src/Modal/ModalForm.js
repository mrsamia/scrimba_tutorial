import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm(props) {
  const { show, onHide } = props;

  // const [edit,setEdit]=useState(false)

  // const[address,setAddress]=useState("")

  // function EditHandler() {
  //   setEdit(!edit);
  // }
  // function addressChangeHandler1(event){
  //   setAddress(event.target.value);
  // }

  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span className="fw-bold">Student Name :</span> {props.name}
          </p>
          <p>
            <span className="fw-bold">Roll :</span> {props.roll}
          </p>
          <p>
            <span className="fw-bold">Address :</span> {props.address}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={EditHandler}>
          Edit
        </Button>
        <Button variant="primary">Save Changes</Button>

        <div>
          {edit?<div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              onChange={addressChangeHandler1}
            />
          </div>:""}
        </div> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;
