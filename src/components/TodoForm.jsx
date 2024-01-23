import React, {useContext, useEffect, useRef, useState} from 'react';
import {TodosContext} from "../context/TodosContext";
import useLocal from "../hooks/useLocal";

export default function TodoForm() {
    const [todoInput, setTodoInput] = useState('');

    const {todos, setTodos, idForTodo, setIdForTodo, focusTodoInput, todoInputRef} = useContext(TodosContext);

    //initialize key and initial value, subsequent calls to setName will update the value as so: ref={nameInput}, ref={todoInputRef}
    const [name, setName] = useLocal('name','');

    //useRef refers to the element that has the ref attribute set to this specified variable
    const nameInput = useRef(null);

    //Focus name input when page loads
    useEffect(() => {
        if (nameInput.current) {
            console.log('focus nameInput');
            nameInput.current.focus()
        }
        return () => {
            console.log('cleanup nameInput');
        }
    }, [name]);

    function nameSubmit(event) {
        event.preventDefault();
        console.log('nameSubmit()');

        setName(nameInput.current.value);
        focusTodoInput();
    }

    function clearName() {
        setName('');
        localStorage.removeItem('name');
    }

    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    function addTodo(event) {
        event.preventDefault();
        //todo name must not be empty
        if (!todoInput.trim().length) {
            return;
        }

        setTodos([
            //spread operator creates a new array with the elements of todos
            ...todos, //[todo1, todo2, todo3] then the new todo is added to the end
            {
                id: idForTodo,
                title: todoInput,
                isComplete: false,
            },
        ]);
        setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);

        //clear input
        setTodoInput('');
    }

    return (
        <>
            {!name && (
            <div className="name-container">
                <h5>What is your name?</h5>
                {/*<button onClick={()=> console.log(nameInput)}>getref</button>*/}
                <form onSubmit={nameSubmit}>
                    <input
                        ref={nameInput}
                        type="text"
                        className="todo-input todo-name-input"
                        placeholder="Your name"
                        // onChange={(event) => setName(event.target.value)}
                    />
                </form>

            </div>
            )}
            <div className="name-container">
                {name && (
                    <div className='flex-justify'>
                        <p className="name-label">Hello, {name}</p>
                        <button onClick={clearName}>Clear Name</button>
                    </div>
                )}
            </div>
            <form action="#" onSubmit={addTodo}>
                <input
                    ref={todoInputRef}
                    type="text"
                    onChange={handleInput}
                    value={todoInput}
                    className="todo-input"
                    placeholder="What do you need to do?"
                />
            </form>
        </>
    );
}
