import React, { useState } from 'react';

function TodoForm(props) {
    /**
     * Input field - state to hold the value
     * Button - onClick function
     * TodoList - state to hold all the value
     */
    const [value, setValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, value])
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (index) => {
        setTodoList(todoList.filter((item, i) => i !== index));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange}/>
                <button type='submit'>Add todo</button>
            </form>

            {todoList.map((item, index) => <p onClick={() => handleClick(index)}>{item}</p>)}
        </div>
    )
}

export default TodoForm;