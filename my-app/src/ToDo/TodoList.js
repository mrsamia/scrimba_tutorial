import React from 'react';
import TodoForm from './TodoForm';

function TodoList(props) {
    return (
        <div>
            <h6>Whats the plan for Today ?</h6>
            <TodoForm/>
        </div>
    );
}

export default TodoList;