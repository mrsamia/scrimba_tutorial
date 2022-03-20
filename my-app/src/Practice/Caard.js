import React from 'react';
import '../style/card.css';
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Caard(props) {
    return (
        <div className= 'main_card col-4'>
            <div className='card'>
                <div>
                    <img className='img-fluid' src={props.image} />
                </div>
                <div className='card_text'>
                    <div>
                        <h3>{props.name}</h3>
                    </div>
                    <div className='icon'>
                        <FaHeart />
                        <p className='icon_p'>{props.Phone}</p>
                    </div>
                    <div className='icon'>
                        <MdEmail />
                        <p className='icon_p'>{props.Mail}</p>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Caard;