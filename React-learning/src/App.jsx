// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const name= "Jiya";
  const age=21;
  const city="Ahmedabad";
  const skills = ["HTML", "CSS", "JavaScript"];
  const isLoggedIn=true;
  const users = [
    { id: 1, name: "Jiya", age: 21 },
    { id: 2, name: "Aman", age: 22 },
    { id: 3, name: "Neha", age: 20 }
  ];


  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Login</h1>}
      <h1> {name}🚀</h1>
      <p>My age is {age}.</p>
      <p>Next year i will be {age + 1}.</p>
      <p>I live in {city}.</p>
      <ul type="square">
        {skills.map(skill => <li>{skill}</li>)}
      </ul>
      <p>
        {users.map((user) => <p>{user.name} - {user.age} years old</p>)}
      </p>
      <button>Click Me</button>
  </div>
  )
}

export default App
