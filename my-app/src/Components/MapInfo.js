import React from 'react';
import '../style/map.css';

function MapInfo(props) {
    return (
        <div className='container map'>
            <div className='pt-4 pb-4'>
                <p><span className='bold'>Name:</span> {props.name}</p>
                <p><span className='bold'>RollNo:</span> {props.roll}</p>
            </div>
        </div>
    );
}

export default MapInfo;