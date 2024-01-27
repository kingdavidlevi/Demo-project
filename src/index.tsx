import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';
//import { router } from './App';
import ScrollToTop from './ScrollToTop';
import { RouterProvider } from 'react-router-dom';
import App from './App'; 
 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);









 
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);*/
