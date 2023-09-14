import { useState } from "react";


const Counter = () => {
    const  [count,setCount]= useState(0)
    const handlePlas = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const handleMainas = () => {
        const newCount = count -1;
        setCount(newCount)
    }
    return (
        <div>
            <h1>count :{count} </h1>
            <button onClick={handlePlas}>add</button>
            <button onClick={handleMainas}>mainas</button>

        </div>
    );
};

export default Counter;