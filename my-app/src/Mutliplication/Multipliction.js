import React, { useState } from 'react';

function Multipliction(props) {
    const value=[1,2,3,4,5,6,7,8,9,10]
    const [multiply,setMultiply]=useState(0)

    function changeHandler(event){
        setMultiply(event.target.value)
    }

    return (
        <div className='pt-5 pb-5'>
            <h2>Multiplication</h2>
            <input type="number"  placeholder="Number" onChange={changeHandler}/>
            <p>{multiply}</p>
            <div>
                {
                    value.map((item)=>(
                        <p>{multiply}*{item}={multiply*item}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default Multipliction;