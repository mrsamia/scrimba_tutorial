import React, { useState } from 'react';
function Boxes(props) {
    
    const [On, setOn] = useState(props.on)

    function click() {
        setOn(!On)
    }

    return (
        <div>
            <div className={props.className} style={{ backgroundColor: On ? "#598f67" : "#23782b" }} onClick={click} ></div>
        </div>
    );
}

export default Boxes;