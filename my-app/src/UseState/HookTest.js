import React, { useState } from 'react';

function HookTest(props) {

    const data = {
        textOne:"Lorem",
        textTwo:"ipsum dolor",
        TextThree:"sit amet consectetur",
    };


const[value, setValue]=useState("One")

function click(){
    if(value === "One"){
        setValue(data.textOne)
    }
    else if( value === data.textOne){
        setValue("One")
    }
}

    return (
        <div>
            <h6>HookTest</h6>
            <input onClick={click} type="text" placeholder='Search'/>
           {value === "One" && <div>
                <p>{data.textOne}</p>
                <p>{data.textTwo}</p>
                <p>{data.TextThree}</p>
            </div>}
        </div>
    );
}

export default HookTest;


