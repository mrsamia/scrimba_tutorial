import React from 'react';
import Input from './Input';

function Form(props) {
    return (
        <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
                <Input className="inpuut" name="text" placeholder="Shut Up" />
            </div>
            <div className='col-6 d-flex justify-content-start'>
                <Input className="inpuut" name="text" placeholder="And Take my Money" />
            </div>
        </div>
    );
}

export default Form;