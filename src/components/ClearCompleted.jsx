import React, {useEffect} from 'react';
import {TodosContext} from "../context/TodosContext";
import {useContext} from "react";

export default function ClearCompleted() {

    const {todos, setTodos, filter, setFilter, focusTodoInput} = useContext(TodosContext);

    useEffect(() => {
        console.log('filter: ' + filter);
    }, [filter]);

    function clearCompleted() {
        setTodos(todos.filter((todo) => !todo.isComplete));
        focusTodoInput();
    }

    return (
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
    )
}

