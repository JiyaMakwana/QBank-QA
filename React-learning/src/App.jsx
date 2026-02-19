import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Layout from "./practice/dashboard";
// import Wrap from "./practice/warmup";
// import Wrapper from "./practice/part2";
import Counter from "./practice/Counter";
import LoginForm from "./practice/LoginForm";

function App() {
  const storedEmail=localStorage.getItem("email");
  const [loggedIn, setLoggedIn] = useState(storedEmail ? true:false);
  const [email, setEmail] =useState(storedEmail || "");

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

  const handleLoginSuccess = (userEmail) => {
    localStorage.setItem("email",userEmail);
    setEmail(userEmail);
    setLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("email");
    setLoggedIn(false);
    setEmail("");
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

      <div>
        <h1>Login Page</h1>
        {loggedIn ? (
          <div>
            <h2>Welcome, {email}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ):(
          <LoginForm onLoginSuccess={handleLoginSuccess}/>
        )}
        
      </div>

  </div>
  )
}

export default App
