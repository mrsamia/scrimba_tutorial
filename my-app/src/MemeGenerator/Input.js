import React from 'react';

function Input(props) {
    return (
        <div>
            <input type="text" name={props.name} placeholder={props.placeholder} className={props.className}/>
        </div>
    );
}

export default Input;