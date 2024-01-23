import React, {useContext} from 'react';
import useToggle from '../hooks/useToggle';
import ClearCompleted from "./ClearCompleted";
import {TodosContext} from "../context/TodosContext";
import CompleteAll from "./CompleteAll";
import {CSSTransition, TransitionGroup } from "react-transition-group";

export default function TodoList() {
    const {todos, filter, setTodos} = useContext(TodosContext);

    //Custom hook useToggle in src/hooks folder
    const [oneVisible, setOneVisible] = useToggle();
    const [twoVisible, setTwoVisible] = useToggle();

    function todosFiltered() {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter((todo) => !todo.isComplete);
            case 'completed':
                return todos.filter((todo) => todo.isComplete);
            default:
                return todos;
        }
    }
    function deleteTodo(id) {
        console.log('delete todo with id: ' + id);
        //delete todo with id
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    function completeTodo(id) {
        console.log('complete todo with id: ' + id);

        //complete todo with id
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            }),
        );
    }
    function markAsEditing(id) {
        console.log('complete todo with id: ' + id);

        //complete todo with id
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.isEditing = !todo.isEditing;
                }
                return todo;
            }),
        );
    }
    function updateTodo(event, id) {
        console.log('Update todo with id: ' + id);

        //complete todo with id
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    if (!event.target.value.trim().length) {
                        todo.isEditing = !todo.isEditing;
                        return todo;
                    }

                    todo.isEditing = !todo.isEditing;
                    todo.title = event.target.value;
                }
                return todo;
            }),
        );
    }

    return (
        //start of fragment, elements must be wrapped in a single parent
        <>
            <TransitionGroup component="ul" className="todo-list">
                {todosFiltered().map((todo, index) => (
                    <CSSTransition key={todo.id} timeout={300} classNames="slide-horizontal">
                        <li className="todo-item-container">
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
                    </CSSTransition>
                ))}
            </TransitionGroup>

            <CSSTransition
                in={oneVisible}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
            >
                <CompleteAll />
            </CSSTransition>

            <CSSTransition
                in={twoVisible}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
            >
                <ClearCompleted />
            </CSSTransition>

            {/*{oneVisible && (*/}
            {/*    <CompleteAll />*/}
            {/*)}*/}
            {/*{twoVisible && (*/}
            {/*    <ClearCompleted />*/}
            {/*)}*/}

            <div className="toggles-container">
                <button className={`button ${oneVisible ? 'bg-green' : 'bg-red'}`} onClick={setOneVisible}>Features One Toggle</button>
                {/*<button className={`button ${oneVisible ? 'bg-green' : 'bg-red'}`} onClick={() => setOneVisible(prevOneVisible => !prevOneVisible)}>Features One Toggle</button>*/}
                <button className={`button ${twoVisible ? 'bg-green' : 'bg-red'}`} onClick={setTwoVisible}>Features Two Toggle</button>
                {/*<button className={`button ${twoVisible ? 'bg-green' : 'bg-red'}`} onClick={() => setTwoVisible(prevTwoVisible => !prevTwoVisible)}>Features Two Toggle</button>*/}
            </div>
        </> //end of fragment, elements must be wrapped in a single parent
    );
}
