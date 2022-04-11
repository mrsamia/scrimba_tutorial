import React from 'react';
import BoxData from './BoxData';
import './box.css';

function Box(props) {


   return BoxData.map((e)=>{
        return(
            <div className="box" key={e.id}></div>
         );
    })
  
}

export default Box;