import React from 'react';
import ForthPartItem from './ForthPartItem';
import Data from './ForthPartData';

function ForthPart(props) {

    return (
        <div className='container'>
            <div className='row'>
                {
                    Data.map((e) => {
                        return (
                            <ForthPartItem title={e.title} text={e.text} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ForthPart;