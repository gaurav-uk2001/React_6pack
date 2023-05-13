// ----------------------REACT HOOKS

import React , {useState} from "react";

const Home = () =>{

    const [a,setA] = useState(0);

    // let a=0;

    // const increment = () =>{
    //     setA(a+1);
    //     // a = a+1;
    //     console.log(a);
    // }

    const decrement = () =>{
        setA(a-1);
        // a = a-1;
        console.log(a);
    }

    return(
        <div>
            <button onClick={()=>setA(a+1)}>Add</button>
            <p>{a}</p>
            <button onClick={decrement}>Minus</button>
        </div>
    )
}
export default Home



// import React , {useEffect, useState} from "react";

// const Home = () =>{

//     const [a,setA] = useState(0);

//     // call back function
//     // run when it is mount and when it is update
//     useEffect(()=>{
//         console.log("showing effect");
//     },[a])
//     // dependency array [a]: mean it run when a call

//     return(
//         <div>
//             <button onClick={()=>setA(a+1)}>Add</button>
//             <p>{a}</p>
//             <button onClick={()=>setA(a-1)}>Minus</button>
//         </div>
//     )
// }
// export default Home