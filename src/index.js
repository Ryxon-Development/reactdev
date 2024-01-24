// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/Root';
import reportWebVitals from './reportWebVitals';
import {
    // useQuery,
    // useMutation,
    // useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <QueryClientProvider client={new QueryClient()}>
                <Root />
                <ReactQueryDevtools />
            </QueryClientProvider>
         </React.StrictMode>,
    );

    reportWebVitals();
} else {
    console.error("Root element with id 'root' not found in the document.");
}
