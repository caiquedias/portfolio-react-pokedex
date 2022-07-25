import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import React from 'react';
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
reportWebVitals();
