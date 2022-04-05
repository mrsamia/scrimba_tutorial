import React, { useState } from 'react';

function HookSix(props) {

    const [value, setValue] = useState(["0", "1"])

    function Click() {
        setValue([...value, (value.length+1)])
    }

    return (
        <div>
            <h6>HookSix</h6>
            <button className='btn btn-primary' onClick={Click}>Click Me</button>
            {
                value.map((e) => {
                    return (
                        <p>{e}</p>
                    );
                })
            }

        </div>
    );
}

export default HookSix;