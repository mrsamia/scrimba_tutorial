import React, { useState } from 'react';
import './hookCard.css';

function HookSevenCard(props) {

    const [content, setContent] = useState({
        name: "Samia Rahman",
        phone: "+1 (719) 555-1212",
        mail: "itsmyreyfalname@examaple.com",
        isFavorite: true,
        btn_name: "Message",
        isButton: true
    })


    function click() {
        setContent({ ...content, isFavorite: !content.isFavorite })
    }
    function btn_click() {
        setContent({ ...content, isButton: !content.isButton })
       
    }

    return (
        <div className='d-flex justify-content-center'>

            <div className='Card'>
                <div>
                    <img className='imge' src={require('../images/catOne.webp')} />
                </div>
                <div className='pt-5'>
                    <div>
                        <img className='star' onClick={click} src={require(content.isFavorite ? '../images/Empty_Star.png' : '../images/full_star.png')} />
                    </div>
                    <div>
                        <h5>{content.name}</h5>
                    </div>
                    <div>
                        <p>{content.phone}</p>
                    </div>
                    <div>
                        <p>{content.mail}</p>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={btn_click}>{content.isButton ? "Message" : "Sent"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HookSevenCard;