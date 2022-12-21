import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
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
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
