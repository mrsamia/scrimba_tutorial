import React from 'react';
import './soloProject.css';

function Component(props) {
    return (
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-5'>
                    <img src={props.img} className='img' />
                </div>
                <div className='col-6 d-flex align-items-center'>
                    <div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-start'>
                                <p>{props.location}</p>
                            </div>
                            <div className='col-6 d-flex justify-content-start'>
                                <p>{props.googleMap}</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <h3>{props.title}</h3>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <p>{props.date}</p>
                        </div>
                        <div className='d-flex justify-content-start txt'>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;