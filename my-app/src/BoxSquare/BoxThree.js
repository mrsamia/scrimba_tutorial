import React from 'react';
import BoxItem from './BoxItem';
import BoxData from './BoxData';
import './box.css';

function BoxThree(props) {

    return (
        <div className='container cntr pt-5'>
            {
                BoxData.map((e) => {
                    return (
                        <BoxItem className="box" color={e.on} />
                    );
                })
            }


        </div>
    );
}

export default BoxThree;