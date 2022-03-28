import React from 'react';
import {useState} from 'react';

function Hook(props) {

const [value,setValue]=useState({
    name:"Samia"
})

function click(){

    setValue({name:"Rony"})
}

    return (
        <div>
            <h6>{value.name}</h6>
            <button className='btn btn-primary' onClick={click}>Change Name</button>
        </div>
    );
}

export default Hook;