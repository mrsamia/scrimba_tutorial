import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm(props) {
  
  const { show, onHide } = props;
  console.log(props, "props");

  const [editvalue, setEditValue] =useState ({name: props.currentData.item.name, roll:props.currentData.item.roll, address: props.currentData.item.address });
  const [edit, setEdit] = useState(false);
  const[editStudentList,setEditStudentlist]=useState([])

  function editName(event) {
    setEditValue({ ...editvalue, name: event.target.value });
  }
  function editRoll(event) {
    setEditValue({ ...editvalue, roll: event.target.value });
  }
  function editAddress(event) {
    setEditValue({ ...editvalue, address: event.target.value });
  }
  function EditHandler() {
    setEdit(true);
    setEditStudentlist([...editStudentList,editvalue]);
  }
  
  

  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* <pre>
           {JSON.stringify(props)}
           </pre> */}
          </div>
          <div>
            <p>
              <span className="fw-bold">Student Name :</span> {props?.currentData?.item?.name ?? ''}
            </p>
            <p>
              <span className="fw-bold">Roll :</span> {props?.currentData?.item?.roll ?? ''}
            </p>
            <p>
              <span className="fw-bold">Address :</span> {props?.currentData?.item?.address ?? ''}
            </p>
          </div>

          <div>
            {edit ? (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name"
                  value={editvalue.name}
                  onChange={editName}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Roll"
                  onChange={editRoll}
                  value={editvalue.roll}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  onChange={editAddress}
                  value={editvalue.address}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={EditHandler}>
            Edit
          </Button>
          <Button variant="primary">Save Changes </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;
