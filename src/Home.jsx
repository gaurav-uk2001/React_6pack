// ----------------------REACT HOOKS

import React  from "react";
import {useContext} from 'react';
import { Context} from "./index";


// APP->  HOME  ->  ROW  ->  CARD
//Now directly using data from onesource with help of useContext

const Row   = () => {

    const data = useContext(Context);
    console.log(data);

    return(
        <div> {data} </div>
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