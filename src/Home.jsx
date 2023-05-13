// ----------------------REACT HOOKS

import React  from "react";


// APP->  HOME  ->  ROW  ->  CARD
// we have send data from APP then to HOME then to ROW
// without use of Usecontext

const Row=({data})=>{
    return(
        <div>{data}</div>
    )
}

const Home = ({data}) =>{
    return(
        <div>
           <Row data={data}/>
        </div>
    )
}
export default Home