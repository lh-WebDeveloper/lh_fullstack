import React, { useState,createContext,useContext} from 'react';
const CountContent=createContext();
function Counter() {
    let count=useContext(CountContent)
    return (<h2>{count}</h2>)
}
function Example4() {
        const [count,setCount]=useState(0)//数组解构
return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
        <CountContent.Provider value={count}>
            <Counter/>
        </CountContent.Provider>
    </div>
    )
}
export default Example4;