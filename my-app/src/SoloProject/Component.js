import React from 'react';
import './soloProject.css';

function Component(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <img src={require("../images/photo-3.jpg")} className='img' />
                </div>
                <div className='col-6 d-flex align-items-center'>
                    <div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-start'>
                                <p>Japan</p>
                            </div>
                            <div className='col-6 d-flex justify-content-start'>
                                <p>view on google map</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <h3>Mount Fuji</h3>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <p>12 Jan, 2021 - 24 Jan, 2021</p>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both ount Fuji is the single most popular tourist site in Japan,ount Fuji is the single most popular tourist site in Japan, Japanese and foreign tourists.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;