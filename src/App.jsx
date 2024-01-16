import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Another from './Another';

function App() {
    const name = 'Ryan';

    const [count, setCount] = useState(0);

    const someStyle = {
        color: 'red',
        fontSize: '40px',
        backgroundColor: 'yellow',
        fontWeight: 'bold',
    };

    return (
        <div className="App">
            <header className="App-header">
                <Another name={name} />

                <div className="counter">
                    <span>Count: {count}</span>
                    <div>
                        <button onClick={() => setCount(count - 1)}>Subtract</button>
                        <button onClick={() => setCount(count + 1)}>Add</button>
                    </div>
                </div>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {true ? <p style={someStyle}>{3 + 3}</p> : <p>False</p>}
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
