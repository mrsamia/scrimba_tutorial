import React from 'react';

function Boxes(props) {

    const styles = {
        backgroundColor: props.on ? "#598f67" : "#23782b",
    }

    return (
        <div>
            <div style={styles} className="box"></div>
        </div>
    );
}

export default Boxes;