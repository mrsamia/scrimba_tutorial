import React from 'react';

function ForthPartItem(props) {
    return (
        <div className='card col-6'>
            <div>
                <h6>{props.title}</h6>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default ForthPartItem;