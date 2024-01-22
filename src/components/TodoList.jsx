import React, {useEffect} from 'react';
import ItemsRemaining from './ItemsRemaining';

export default function TodoList({
                                     todos,
                                     deleteTodo,
                                     completeTodo,
                                     markAsEditing,
                                     updateTodo,
                                     remaining,
                                     clearCompleted,
                                     completeAll,
                                     todosFiltered
}) {

    const [filter, setFilter] = React.useState('all');

    useEffect(() => {
        console.log('filter: ' + filter);
    }, [filter]);

    return (
        //start of fragment, elements must be wrapped in a single parent
        <>
            <ul className="todo-list">
                {todosFiltered(filter).map((todo, index) => (
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
                    <div className="button" onClick={completeAll}>Check All</div>
                </div>

                <ItemsRemaining remaining={remaining} />
            </div>
            <div className="other-buttons-container">
                <div>
                    <button className={`button filter-button ${filter === 'all' && 'filter-button-active'}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`button filter-button ${filter === 'active' && 'filter-button-active'}`} onClick={() => setFilter('active')}>Active</button>
                    <button className={`button filter-button ${filter === 'completed' && 'filter-button-active'}`} onClick={() => setFilter('completed')}>Completed</button>
                </div>
                <div>
                    <button className="button" onClick={clearCompleted}>Clear completed</button>
                </div>
            </div>
        </> //end of fragment, elements must be wrapped in a single parent
    );
}
