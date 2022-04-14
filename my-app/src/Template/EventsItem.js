import React from 'react';

function EventsItem(props) {
    return (
        <div className='container pt-5 mt-4'>
            <div className='row'>
                {props.isLeft && <div className='col-6'>
                    <img src={props.image} alt='img' style={{ height: "350px", width: "300px" }} />
                </div>}
                <div className='col-6  align-self-center'>
                    <div className='d-flex justify-content-start'>
                        <p>{props.title}</p>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <h4>{props.subtitle}</h4>
                    </div>
                    <div>
                        <p className='text-start'>{props.description}</p>
                    </div>
                </div>
                {!props.isLeft && <div className='col-6'>
                    <img src={props.image} alt='img' style={{ height: "350px", width: "300px" }} />
                </div>}
            </div>
        </div>
    );
}

export default EventsItem;