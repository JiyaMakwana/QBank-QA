import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Layout from "./practice/dashboard";
// import Wrap from "./practice/warmup";
// import Wrapper from "./practice/part2";
import Counter from "./practice/Counter";

function App() {
  const [count, setCount]=useState(() => {
    const savedValue=localStorage.getItem("count");
    return savedValue ? Number(savedValue) : 0;
  });

  const handleIncrement = () => {
    let newValue=count + 1;
    setCount(newValue);
    localStorage.setItem("count",newValue);
  }
  const handleDecrement = () => {
    if(count > 0) {
      let newValue=count - 1;
      setCount(newValue);
      localStorage.setItem("count",newValue);
    }
  }

  const handleReset = () => {
    setCount(0);
    localStorage.setItem("count",0);
  }
  
  return (
    <div>
      {/* <Layout/> */}
      {/* <Wrap/> */}
      <Counter 
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <button onClick={handleReset}>Reset</button>
  </div>
  )
}

export default App
