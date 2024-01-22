import { useState, useRef, useEffect, useMemo } from 'react';
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocal from '../hooks/useLocal';

function App() {

    // const [name, setName] = useState('');

    //initialize key and initial value, subsequent calls to setName will update the value
    const [name, setName] = useLocal('name','');

    const nameInput = useRef(null);

    //Todos are now saved in local storage
    const [todos, setTodos] = useLocal('todos', []);
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         title: 'Finish React Series',
    //         isComplete: false,
    //         isEditing: false,
    //     },
    //     {
    //         id: 2,
    //         title: 'Go to Grocery',
    //         isComplete: true,
    //         isEditing: false,
    //     },
    //     {
    //         id: 3,
    //         title: 'Do other thing',
    //         isComplete: false,
    //         isEditing: false,
    //     },
    // ]);

    // const [todoInput, setTodoInput] = useState('');
    const [idForTodo, setIdForTodo] = useLocal('idForTodo', 1);
    function addTodo(todoInput) {
        setTodos([
            ...todos,
            {
                id: idForTodo,
                title: todoInput,
                isComplete: false,
            },
        ]);

        setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
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

    // const [singleTodo, setSingleTodo] = useState({});

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

    function remainingCalc() {
        console.log('remainingCalc');
        return todos.filter((todo) => !todo.isComplete).length;
    }

    //Cache the result of a function, only if the dependencies have changed [todos]
    const remaining = useMemo(remainingCalc, [todos]);

    function clearCompleted() {
        setTodos(todos.filter((todo) => !todo.isComplete));
    }

    function completeAll() {
        setTodos(
            todos.map((todo) => {
                todo.isComplete = true;
                return todo;
            }),
        );
    }

    function todosFiltered(filter) {
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

    useEffect(() => {
        // console.log('<<< useEffect FOR [todos]>>>');
    }, [todos]);

    useEffect(() => {
        // console.log('<<< useEffect FOR [name] >>>');

        if (nameInput.current) {
            nameInput.current.focus()
        }

        // setName(localStorage.getItem('name') ?? '');
    }, [name]);

    useEffect(() => {
       console.log('>>> useEffect Running');

       return () => {
          console.log('<<< useEffect Cleanup');
       }
    });

    function nameSubmit(event) {
        event.preventDefault();
        console.log('nameSubmit()');

        setName(nameInput.current.value);
        //
        // localStorage.setItem('name', nameInput.current.value);
    }

    function clearName() {
        setName('');
        localStorage.removeItem('name');
    }

    return (
        <div className="todo-app-container">
            <div className="todo-app">
                <h2>Todo App</h2>
                <hr/>
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

                <TodoForm addTodo={addTodo} />

                {/*{todos.length === 0 ?  : (*/}
                {todos.length > 0 ? (
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        markAsEditing={markAsEditing}
                        updateTodo={updateTodo}
                        remaining={remaining}
                        clearCompleted={clearCompleted}
                        completeAll={completeAll}
                        todosFiltered={todosFiltered}
                    />
                ) : (
                    <NoTodos addTodo={addTodo} />
                )}
            </div>
        </div>
    );
}

export default App;
