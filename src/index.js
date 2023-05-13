import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createContext} from "react";

// creating context in index.js rather than app.js for clean ui
const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Context.Provider value={"Gaurav as Data"}>
      <App />
    </Context.Provider>
  
  </React.StrictMode> 
);

export {Context};
