import React, { useState } from 'react';
import Todo from './Todo';
import TodoAppForm from './TodoAppForm';


function TodoApp(props) {

    const [todos, setTodos] = useState([

        { text: "Learn about React" },
        { text: "Meet friend for lunch" },
        { text: "Build really cool todo app" }
    ])

   

    // function listTodo(text){
    //     const newTodos = [...todos, { text }];
    //     setTodos(newTodos);
    // }
        
function listTodo(text){
    setTodos([...todos,{text}])
}

    return (
        <div className='pt-3 pb-5'>
            <div>

                {todos.map((e) => (
                    <Todo
                        todo={e}
                    />
                ))}
            </div>
            <TodoAppForm addTodo={listTodo} />
        </div>
    );
}

export default TodoApp;