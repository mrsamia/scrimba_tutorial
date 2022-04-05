import React, { useState } from 'react';
import './hookCard.css';

function HookSevenCard(props) {

    const [content, setContent] = useState({
        name: "Samia Rahman",
        phone: "+1 (719) 555-1212",
        mail: "itsmyreyfalname@examaple.com",
        isFavorite: false
    })
// let src;
//     function click() {
//         if (src === '../images/Empty_Star.png') {

//             setContent('../images/full_star.png')
//         }
//         else if (src === '../images/full_star.png') {
//             setContent('../images/Empty_Star.png')
//         }
//     }

    return (
        <div className='d-flex justify-content-center'>

            <div className='Card'>
                <div>
                    <img className='imge' src={require('../images/catOne.webp')} />
                </div>
                <div className='pt-5'>
                    <div>
                        <img className='star'  src={require(content.isFavorite ? '../images/Empty_Star.png':'../images/full_star.png')} />
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
                </div>
            </div>
        </div>
    );
}

export default HookSevenCard;