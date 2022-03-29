import React from 'react';

function BbcItem(props) {
    return (
        <div>
            <div>
                <img src={props.image} alt={props.alt} />
            </div>
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default BbcItem;
