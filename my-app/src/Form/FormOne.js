import React, { useState } from 'react';



function FormOne(props) {

    const [value, setValue] = useState({
        firstname: " ",
        lastname: " ",
        address: " ",
        email: " ",
        textarea: " ",
        language: " "
    })

    function onchnageHandler(event) {
        var myName = event.target.name;
        var myValue = event.target.value;
        setValue({ ...value, [myName]: myValue });

    }

    return (
        <div className='container pt-5 pb-5'>
            <h4>Input Form</h4>
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
            <h4>Iext Area</h4>
            <p>{value.textarea}</p>
            <textarea type="text" name="textarea" placeholder='Text Area' onChange={onchnageHandler} />

            <fieldset>
                <h4>Radio Button</h4>
                <p>Choose your favorite Web language:</p>

                <input type="radio" id='html' name='language' value="html" />
                <label htmlFor="html">HTML</label><br></br>

                <input type="radio" id='css' name='language' value="css" />
                <label htmlFor="css">CSS</label><br></br>

                <input type="radio" id='react' name='language' value="react" />
                <label htmlFor="react">React</label>
            </fieldset>

        </div>
    );
}

export default FormOne;