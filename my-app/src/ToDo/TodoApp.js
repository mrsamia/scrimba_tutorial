import React, { useState } from 'react';
import Todo from './Todo';
import TodoAppForm from './TodoAppForm';


function TodoApp(props) {

    const [todos, setTodos] = useState([

        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ])

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };
      
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

      

    // function listTodo(text){
    //     const newTodos = [...todos, { text }];
    //     setTodos(newTodos);
    // }

    function listTodo(text) {
        setTodos([...todos, { text }])
    }

    return (
        <div className='pt-3 pb-5'>
            <div>

                {todos.map((e) => (
                    <Todo
                        todo={e} completeTodo={completeTodo}  removeTodo={removeTodo}
                    />
                ))}
            </div>
            <TodoAppForm addTodo={listTodo} />
        </div>
    );
}

export default TodoApp;