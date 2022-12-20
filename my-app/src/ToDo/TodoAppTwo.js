import React, { useState } from 'react';

function TodoAppTwo(props) {
    const [input,setInput]=useState("")
    const[todo,setTodo]=useState([])

    function changeHandler(event){
        setInput(event.target.value)
    }

    function clickHandler(){
        setTodo([...todo,input]);
        setInput("");
    }

    return (
        <div className='pt-5 pb-5'>
            <h3>Todo</h3>
            <input type="text" placeholder='Add a todo' value={input} onChange={changeHandler}/>
            <button onClick={clickHandler}>Add todo</button>
            <div>
               {
                todo.map((item)=>(
                  <div className='container d-flex justify-content-center'>
                      <h6><li>{item}</li></h6>
                    <button>delete</button>
                  </div>
                ))
               }
            </div>
        </div>
    );
}

export default TodoAppTwo;