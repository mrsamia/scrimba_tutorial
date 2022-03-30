import React,{useState} from 'react';

function HookFour(props) {

    const [id,setId]=useState(0)

    function click(){
        setId(id + 1)
    }

    const [count,setCount]=useState(0)

    function clickCount(){
        setCount(count + 1)
    }

    return (
        <div className='mt-5'>
            <h6>ID: {id}</h6>
            <h6>Count:{count}</h6>
            <div>
                <button className='btn btn-primary' onClick={click}>Increment ID</button>
            </div>
            <button className='btn btn-primary mt-3 mb-5' onClick={clickCount}>Increment Count</button>
        </div>
    );
}

export default HookFour;