// ----------------------REACT HOOKS

import React, { useEffect }  from "react";
import {useContext} from 'react';
import { Context} from "./index";

// useref use to select our own element
import { useRef } from "react";


// APP->  HOME  ->  ROW  ->  CARD
//Now directly using data from onesource with help of useContext

const Row   = () => {

    const data = useContext(Context);

    const customElement = useRef(null);
    useEffect(()=>{
        console.log(customElement.current);
        // it console <div> Gaurav as Data</div>
    },[])

    return(
        <div ref={customElement}>{data}</div>
    )
}

const Home = () =>{
    return(
        <div>
           <Row/>
        </div>
    )
}
export default Home