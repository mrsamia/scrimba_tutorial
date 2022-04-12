import React, { useState } from 'react';
import BoxData from './BoxData';
import './box.css';
import Boxes from './Boxes';

function BoxTwo(props) {
    
    return (
        <div className='container cntr pt-5'>
            <div className='row'>
                {
                    BoxData.map((e) => {
                        return (
                            <div className='col-4'>
                                <Boxes className="box" color={e.on} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );

}

export default BoxTwo;