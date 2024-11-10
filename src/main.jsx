import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './index.css';
import './app.css';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>,
);
