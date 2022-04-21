import React, { useState } from 'react';

function TodoAppForm({addTodo}) {
    const[value,setValue]=useState("")

    const handleSubmit= event=>{
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("")
        
    }
    function onchnage(event){
        setValue(event.target.value)
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
               <input onChange={onchnage} value={value}/>
               <button>ADD</button>
           </form>
        </div>
    );
}

export default TodoAppForm;