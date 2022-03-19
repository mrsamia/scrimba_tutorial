import React from 'react';
import DataItems from './MapData';
import MapInfo from './MapInfo';

function Map(props) {

    {
        return DataItems.map((e) => {
            return (
                <MapInfo name={e.name} roll={e.rollNo} />
            );
        })
    }
}

export default Map;