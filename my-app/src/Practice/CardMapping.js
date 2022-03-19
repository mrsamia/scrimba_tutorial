import React from 'react';
import Caard from './Caard';
import CardData from './MappingData';

function CardMapping(props) {

    {
        return CardData.map((a) => {

            return (
                <Caard name={a.title} Phone={a.phone} Mail={a.mail} />
            );
        })

    }
}

export default CardMapping;


