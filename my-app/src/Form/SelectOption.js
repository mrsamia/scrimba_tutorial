import React, { useState } from 'react';

function SelectOption(props) {

    const[value,setValue]=useState({
        cityOne:"Dhaka",
        cityTwo:"Shibpur",
        cityThree:"Rangpur",
        cityFour:"Dimla",
        show:""
    })

    function onChnageHandle(event){
        var myValue=event.target.value;
        setValue({show:myValue})
    }

    return (
        <div>
            <p>Selected Area: {value.show}</p>
            <select onChange={onChnageHandle}>
                <option>{value.cityOne}</option>
                <option>{value.cityTwo}</option>
                <option>{value.cityThree}</option>
                <option>{value.cityFour}</option>
            </select>
        </div>
    );
}

export default SelectOption;