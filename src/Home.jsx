// ----------------------REACT HOOKS

import React , {useEffect, useState} from "react";

const Home = () =>{

    const [a,setA] = useState(0);

    // call back function
    // run when it is mount and when it is update
    useEffect(()=>{
        console.log("showing effect");
    },[a])
    // dependency array [a]: mean it run when a or other variable b,c,d(if mentioned) call

    return(
        <div>
            <button onClick={()=>setA(a+1)}>Add</button>
            <p>{a}</p>
            <button onClick={()=>setA(a-1)}>Minus</button>
        </div>
    )
}
export default Home