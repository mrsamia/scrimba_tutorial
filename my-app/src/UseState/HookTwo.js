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

    function click() {

        var img = document.getElementById("1");
        if (img.innerHTML === "Message") {
            img.innerHTML = "Sent";
            img.style.color = 'white';
            img.style.backgroundColor = "#064DDE";

        }
        else if (img.innerHTML === "Sent") {
            img.innerHTML = "Message";
            img.style.color = 'white';
            img.style.backgroundColor = "#FF7A7A";

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
                <button id='1' className='btn btn-primary' onClick={click}>Message</button>
            </div>


        </div>
    );
}

export default HookTwo;