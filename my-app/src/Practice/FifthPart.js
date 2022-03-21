import React from 'react';
import FifthPartItems from './FifthPartItems';
import FifthPartData from './FifthPartData';

function FifthPart(props) {


    return FifthPartData.map((e)=>{
        return(
            <FifthPartItems name={e.name} age={e.age} status={e.status}/>
        );
    })

    
}

export default FifthPart;