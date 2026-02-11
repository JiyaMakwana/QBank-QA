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

  return (
    <div>
    <h1>Hello {name} 🚀</h1>
    <p>My age is {age}.</p>
    <p>Next year i will be {age + 1}.</p>
    <p>I live in {city}.</p>
    <ul type="square">
      {skills.map(skill => <li>{skill}</li>)}
    </ul>
    <button>Click Me</button>
  </div>
  )
}

export default App
