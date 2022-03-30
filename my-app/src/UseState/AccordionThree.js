import React, { useState } from 'react';
import './accordion.css';

function AccordionThree(props) {
    const data = {
        title: "Accordion",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
    };

    const [value, setValue] = useState("+")

    function click() {
        if (value === "+") {
            setValue("-")
        }
        else if (value === "-") {
            setValue("+")
        }
    }

    return (
        <div className='container'>
            <h3>AccordionThree</h3>
            <div className='accordion'>
                <div className='accordion_head' onClick={click}>
                    <div>{data.title}</div>
                    <div>{value}</div>
                </div>
                <div className='accordion_body'>
                    {value === "-" && <p>{data.content}</p>}
                </div>
            </div>
        </div>
    );
}

export default AccordionThree;