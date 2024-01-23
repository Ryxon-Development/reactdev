// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>,
    );

    reportWebVitals();
} else {
    console.error("Root element with id 'root' not found in the document.");
}
