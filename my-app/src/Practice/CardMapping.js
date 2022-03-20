import React from 'react';
import Caard from './Caard';
import CardData from './MappingData';

function CardMapping(props) {

    // {
    //     return CardData.map((a) => {

    //         return (
    //             <Caard name={a.title} Phone={a.phone} Mail={a.mail} />
    //         );
    //     })

    // }

    return (
        <div className='container'>
        <div className='row'>
            {
                CardData.map((a) => {

                    return (
                        <Caard name={a.title} Phone={a.phone} Mail={a.mail} />
                    );
                })

            }
        </div>
        </div>
    );
}

export default CardMapping;


