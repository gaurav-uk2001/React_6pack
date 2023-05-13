import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
  // after removing showing effect the useeffect run only 1 time instead of 2times
  //  this strict mode is to boost performance
);
