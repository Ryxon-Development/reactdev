import React, {useContext} from 'react';
import {TodosContext} from "../context/TodosContext";
import ItemsRemaining from "./ItemsRemaining";

export default function ClearCompleted() {

    const {remaining, todos, setTodos} = useContext(TodosContext);

    function completeAll() {
        setTodos(
            todos.map((todo) => {
                todo.isComplete = true;
                return todo;
            }),
        );
    }

    return (
        <div className="check-all-container">
            <div>
                <div className="button" onClick={completeAll}>Check All</div>
            </div>
            <ItemsRemaining remaining={remaining} />
        </div>
    )
}

