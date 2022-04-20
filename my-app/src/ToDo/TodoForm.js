import React, { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState({
        AddTodo:""
    })

    function onchnageHandler(event) {
        var myName = event.target.name;
        var myValue = event.target.value;
        setValue({ ...value, [myName]: myValue });

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }
  


    return (
        <div className='container pt-2 pb-4'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Add a Todo' name="AddTodo" onChange={onchnageHandler} />
                <button>Add Todo</button> 
            </form>
            <p>{value.AddTodo}</p>
        </div>
    );
}

export default TodoForm;