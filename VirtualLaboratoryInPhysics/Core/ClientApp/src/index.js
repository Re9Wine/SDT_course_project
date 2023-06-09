import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
   <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
)

//  import { createRoot } from 'react-dom/client'

//  const container = document.getElementById('root');
//  const root = createRoot(container);
//  root.render(<App tab="home" />);