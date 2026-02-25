import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import CounterDisplay from "./CounterDisplay";
import {useState} from "react";

function Counter() {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

    return (
        <div>
            <CounterDisplay count={count}/>
            <IncrementButton onCLick={increment}/>
            <DecrementButton onCLick={decrement}/>
        </div>
    )

}

export default Counter;