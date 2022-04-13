import React, { useState } from 'react';
import './accordion.css';

function AccordionFour(props) {

    const value = {
        title: "Setting Up the Sample Project",
        description: "Consider an application that requires a user to log in. If the user is logged out, it will display a Login button. If the user is logged in, it will display a Logout button."
    }

    const [active, setActive] = useState(false)

    function click() {
        setActive(!active)
    }

    return (
        <div className='container cntr pt-5 pb-5'>

            <div className='Accordion'>
                <div className='accordion_title' onClick={click}>
                    <h6>{value.title}</h6>
                    <p>{active ? "-" : "+"}</p>
                </div>

                {active && <p className='descptn'>{value.description}</p>}

            </div>
        </div>
    );
}

export default AccordionFour;