import React, { useState } from 'react';
import StModal from './StModal';

function Form(props) {

const[userInput,setUserInput]=useState(
    {
        name:"",
        address:"",
        roll:""
    }
)
const [studentDetails,setStudentDetails]=useState()
const[studentList,setStudentList]=useState([])
const [show, setShow] = useState(false);

function NameChangeHandler(event){
    setUserInput({...userInput,name:event.target.value})
}
function AddressChangeHandler(event){
    setUserInput({...userInput,address:event.target.value})
}
function RollChangeHandler(event){
    setUserInput({...userInput,roll:event.target.value})
}
function submitHnadler(){
    setStudentList([...studentList,userInput])
}
function handleShow(index){
    setShow(true)
    setStudentDetails(studentList[index])
}
function handleClose(){
    setShow(false)
}
    return (
        <div className='container pt-5'>
            <div>
                <input type="text" className="form-control" Placeholder="Name" onChange={NameChangeHandler}/>
            </div>
            <div className='pt-3 pb-3'>
                <input type="text" className="form-control" Placeholder="Address" onChange={AddressChangeHandler}/>
            </div>
            <div>
                <input type="number" className="form-control" Placeholder="Roll" onChange={RollChangeHandler}/>
            </div>
            <div className='pt-3 pb-3'>
                <button className='btn btn-warning' onClick={submitHnadler}>Submit</button>
            </div>
           <div>
            {
                studentList.map((item,index)=>(
                    <div className='card' onClick={()=>handleShow(index)}>
                    <h6>Name: {item.name}</h6>
                    <h6>Address: {item.address}</h6>
                    <h6>Roll: {item.roll}</h6>
                </div>
                ))
            }
           </div>
           <div>
            {
                show?<StModal show={show} handleClose={handleClose} name={studentDetails.name} address={studentDetails.address} roll={studentDetails.roll}/>:""
            }
           </div>
        </div>
    );
}

export default Form;