import React from 'react';
import Caard from './Caard';
import CardData from './MappingData';

function CardMapping(props) {

    return (
        <div className='container'>
            <div className='row'>
                {
                    CardData.map((a) => {

                        return (
                            <Caard name={a.title} Phone={a.phone} Mail={a.mail} />
                            // <Caard key={a.id} {...a}/>
                        );
                    })

                }
            </div>
        </div>
    );
}

export default CardMapping;


