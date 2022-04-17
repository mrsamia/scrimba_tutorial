import React, { useState } from 'react';



function FormOne(props) {

    const [value, setValue] = useState({
        firstname: " ",
        lastname: " ",
        address: " ",
        email: " "

    })

    function onchnageHandler(event) {
        var myName = event.target.name;
        var myValue = event.target.value;
        setValue({ ...value, [myName]: myValue });

    }

    return (
        <div className='container pt-5 pb-5'>
            <h6>Input Form</h6>
            <p>FirstName: {value.firstname}</p>
            <p>LastName: {value.lastname}</p>
            <p>address: {value.address}</p>
            <p>email: {value.email}</p>
            <form>
                <input type="text" name="firstname" placeholder='Your FirstName' onChange={onchnageHandler} /><br></br><br></br>
                <input type="text" name="lastname" placeholder='Your LastName' onChange={onchnageHandler} /><br></br><br></br>
                <input type="text" name="address" placeholder='Your address' onChange={onchnageHandler} /><br></br><br></br>
                <input type="text" name="email" placeholder='Your email' onChange={onchnageHandler} /><br></br><br></br>
            </form>
        </div>
    );
}

export default FormOne;