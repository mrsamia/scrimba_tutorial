import React, { useState } from 'react';
import './Hook.css';

function HookThree(props) {
    const [count,setCount]=useState(0)

    function add(){
        setCount(count + 1)
    }

    function minus(){
        setCount(count - 1)
    }

    return (
        <div className='counter'>
            <button className='minus' onClick={minus}>-</button>
        <div className='count'>
            <h4>{count}</h4>
        </div>
        <button className='add' onClick={add}>+</button>
        </div>
    );
}

export default HookThree;