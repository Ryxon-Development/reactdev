import {useEffect, useRef, useState} from 'react';
import '../reset.css';
import '../tailwind.css';
import '../App.css';

import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocal from '../hooks/useLocal';
import {TodosContext} from "../context/TodosContext";
import {CSSTransition, SwitchTransition} from "react-transition-group";

function App() {

    const [filter, setFilter] = useState('all');

    //Todos are now saved in local storage
    const [todos, setTodos] = useLocal('todos', []);
    const [idForTodo, setIdForTodo] = useLocal('idForTodo', 1);

    useEffect(() => {
       console.log('>>>App.jsx useEffect');

       return () => {
          // console.log('<<< useEffect Cleanup');
       }
    });

    const todoInputRef = useRef(null);
    function focusTodoInput() {
        // Check if the ref and its current property exist before calling focus
        if (todoInputRef.current) {
            console.log('focus todoInput');
            todoInputRef.current.focus();
        }
    }

    return (
        <TodosContext.Provider value={{
            todos,
            setTodos,
            idForTodo,
            setIdForTodo,
            filter,
            setFilter,
            todoInputRef,
            focusTodoInput
        }}>

            <div className="todo-app">
                <h2>Todo App</h2>
                <hr/>

                <TodoForm/>

                <SwitchTransition mode="out-in">
                    <CSSTransition key={todos.length > 0} timeout={300} classNames="slide-vertical" unmountOnExit>
                        {todos.length > 0 ? ( <TodoList/> ) : ( <NoTodos/> )}
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </TodosContext.Provider>
    );
}

export default App;
