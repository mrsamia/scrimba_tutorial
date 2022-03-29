import React from 'react';
import BbcItem from './BbcItem';
import data from './BbcData';

function BbcMap(props) {

    return data.map((e) => {
        return (
            <BbcItem image={e.imageURL} title={e.title} description={e.description} alt="image" />
        );
    })

}

export default BbcMap;