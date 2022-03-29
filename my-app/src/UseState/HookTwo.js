import React from 'react';
import { useState } from 'react';
import './Hook.css';

function HookTwo(props) {

    const [value, setValue] = useState(0)

    function add() {
        setValue(value + 1)
    }
    function minus() {
        setValue(value - 1)
    }

    const [name, setName] = useState("Message")
    function click() {
        if (name === "Message") {
            setName("Sent")
        } else if (name === "Sent") {
            setName("Message")
        }
    }

    return (
        <div className='main_body'>
            <h4 className='value'>{value}</h4>
            <div className='valueTwo'>
                <h3 onClick={add}>+</h3>
                <h3 onClick={minus}>-</h3>
            </div>
            <div>
                <button className='btn btn-primary' onClick={click}>{name}</button>
            </div>


        </div>
    );
}

export default HookTwo;