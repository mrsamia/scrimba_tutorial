import React, { useState } from 'react';

function HookFive(props) {

   const [thingsArray,setThingsArray]=useState(["Things 1", "Things 2"])
       
        function addItem() {

            setThingsArray([...thingsArray,'Things' +' '+ (thingsArray.length + 1) ])
        }
        
       return (
           <div>
               <button className='btn btn-primary' onClick={addItem}>Add Item</button>
               {
                    thingsArray.map((e)=>{
            
                        return(
                            <div>
                              <p>{e}</p>
                            </div>
                        );
                    })
               }
           </div>
       )
    }
export default HookFive;


