import React, { useState } from 'react';
export default function TodoForm(props) {
    const [todoInput, setTodoInput] = useState('');

    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!todoInput.trim().length) {
            return;
        }

        props.addTodo(todoInput);
        console.log('TodoForm: ' + todoInput);

        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleInput}
                value={todoInput}
                className="todo-input"
                placeholder="What do you need to do?"
            />
        </form>
    );
}
