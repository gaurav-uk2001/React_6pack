import "./App.css";
import Home from "./Home";
// import {createContext} from "react"
import React from "react";

// const contex = createContext();

function App() {
// all Hooks created under function app

  return(

    // sending value directly to provider instead of Home
    // <contex.Provider value={"Gaurav as data"}>

      <div>
        <Home/>
      </div>

    // </contex.Provider>
  );
}

export default App;
// export {contex};