import './accordion.css';
import React, { useState } from 'react';

function AccordionTwo(props) {

    const accordionData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
    };
    const { title, content } = accordionData;
    const [isActive, setIsActive] = useState("+");

    function click() {
        if (isActive === "+") {
            setIsActive("-")
        }
        else if (isActive === "-") {
            setIsActive("+")
        }
    }

    return (
        <div>
            <h3>AccordionTwo</h3>
            <div className='Container'>
                <div className="accordion">
                    <div className="accordion-item">
                        <div
                            className="accordion-title" onClick={click}>
                            <div>{title}</div>
                            <div>{isActive}</div>
                        </div>
                        {isActive === '-' && <div className="accordion-content">{content}</div>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AccordionTwo;