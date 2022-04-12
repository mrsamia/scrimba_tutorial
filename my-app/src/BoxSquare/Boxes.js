import React, { useState } from 'react';
function Boxes(props) {
    
    const [Color, setColor] = useState(props.color)

    function click() {
        setColor(!Color)
    }

    return (
        <div>
            <div className={props.className} style={{ backgroundColor: Color ? "#598f67" : "#23782b" }} onClick={click} ></div>
        </div>
    );
}

export default Boxes;