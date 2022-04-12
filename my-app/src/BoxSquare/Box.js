import React from 'react';
import BoxData from './BoxData';
import './box.css';
// import Boxes from './Boxes';

function Box(props) {

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
                                {/* <Boxes key={e.id} on={e.on} /> */}
                                <div style={styles} className="box" key={e.id} on={e.on}></div>
                            </div>

                        );
                    })
                }

            </div>
        </div>
    );

}

export default Box;