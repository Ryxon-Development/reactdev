import React from 'react';

export default function TodoList({ todos, deleteTodo, completeTodo, markAsEditing, updateTodo }) {
    return (
        //start of fragment, elements must be wrapped in a single parent
        <>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={todo.id} className="todo-item-container">
                        <div className="todo-item">
                            <input checked={todo.isComplete} type="checkbox" onChange={() => completeTodo(todo.id)} />

                            {!todo.isEditing && (
                                <span
                                    onDoubleClick={() => markAsEditing(todo.id)}
                                    className={`todo-item-label ${todo.isComplete && 'line-through'}`}
                                >
                                    {todo.title}
                                </span>
                            )}

                            {todo.isEditing && (
                                <input
                                    type="text"
                                    className="todo-item-input"
                                    defaultValue={todo.title}
                                    autoFocus
                                    onBlur={(event) => updateTodo(event, todo.id)}
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter') {
                                            updateTodo(event, todo.id);
                                        }
                                    }}
                                />
                            )}
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="x-button">
                            <svg className="x-button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="check-all-container">
                <div>
                    <div className="button">Check All</div>
                </div>

                <span>3 items remaining</span>
            </div>
            <div className="other-buttons-container">
                <div>
                    <button className="button filter-button filter-button-active">All</button>
                    <button className="button filter-button">Active</button>
                    <button className="button filter-button">Completed</button>
                </div>
                <div>
                    <button className="button">Clear completed</button>
                </div>
            </div>
        </> //end of fragment, elements must be wrapped in a single parent
    );
}
