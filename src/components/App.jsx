import { useState } from 'react';
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish React Series',
            isComplete: false,
            isEditing: false,
        },
        {
            id: 2,
            title: 'Go to Grocery',
            isComplete: true,
            isEditing: false,
        },
        {
            id: 3,
            title: 'Do other thing',
            isComplete: false,
            isEditing: false,
        },
    ]);

    // const [todoInput, setTodoInput] = useState('');
    const [idForTodo, setIdForTodo] = useState(4);
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

    return (
        <div className="todo-app-container">
            <div className="todo-app">
                <h2>Todo App</h2>
                <TodoForm addTodo={addTodo} />

                {/*{todos.length === 0 ?  : (*/}
                {todos.length > 0 ? (
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        markAsEditing={markAsEditing}
                        updateTodo={updateTodo}
                    />
                ) : (
                    <NoTodos addTodo={addTodo} />
                )}
            </div>
        </div>
    );
}

export default App;
