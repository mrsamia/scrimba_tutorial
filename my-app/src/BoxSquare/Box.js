import React, { useState } from 'react';
import BoxData from './BoxData';
import './box.css';


function Box(props) {

    function click(event) {
        const bg = event.target.style.backgroundColor
        if (bg === 'rgb(89, 143, 103)') {
            event.target.style.backgroundColor = 'rgb(35, 120, 43)';
        } else {
            event.target.style.backgroundColor = 'rgb(89, 143, 103)';
        }
    }

    return (
        <div className='container cntr pt-5'>
            <div className='row'>

                {
                    BoxData.map((e) => {

                        const styles = {
                            backgroundColor: e.on ? "#598f67" : "#23782b",
                        }
                        return (
                            <div className='col-4'>
                                <div style={styles} className="box" key={e.id} on={e.on} onClick={click}></div>
                            </div>

                        );
                    })
                }

            </div>
        </div>
    );

}

export default Box;