// import { useState } from "react";

function Counter({count, handleIncrement, handleDecrement}) {
    return (
        <div>
            <h1>Counter::{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter;