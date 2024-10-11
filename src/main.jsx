import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StrictMode } from 'react';

import './index.css';
import './app.css';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
