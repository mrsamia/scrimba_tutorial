import React, { useState } from 'react';

function TodoFormTwo(props) {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    function onChangeHandler(event) {
        setValue(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log(value)
        setList([...list, value])
        setValue('')
    }

    return (
        <div className='pt-5 pb-5'>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Add a todo' onChange={onChangeHandler} value={value} />
                <button>Add Todo</button>
                {
                    list.map((e, index) => {
                        return (
                            <p>{e}</p>
                        );
                    })
                }
            </form>
            <p></p>
        </div>
    );
}

export default TodoFormTwo;