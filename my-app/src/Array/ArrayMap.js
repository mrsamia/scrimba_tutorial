import React, { useState } from 'react';

function ArrayMap(props) {
    const object=[{
        name:"Samia",
        age:"25",
        status:"Married"
    },
    {
        name:"Mim",
        age:"24",
        status:"UnMarried"
    },
    {
        name:"Rony",
        age:"26",
        status:"Married"
    }]

    const array=[1,2,3,4,5]

    return (
        <div className='container pt-5 pb-5'>
            <div >
                {
                    object.map((item)=>(
                        <div className='card mt-4'>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            <p>{item.status}</p>
                        </div>
                    ))
                }
            </div>
            <div >
                {
                    array.map((item)=>(
                        <div className='card mt-4'>
                            <p>{item}</p>
                            
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default ArrayMap;