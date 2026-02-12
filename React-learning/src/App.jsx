// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function Navbar() {
  return (
    <nav style={{background: "#1e293b", color:"white",padding:"15px 20px"}}>
      <h2>My Dashboard</h2>
    </nav>
  )
}

function Sidebar() {
  const list_items=["Home","Profile","Settings"]
  return (
    <aside style={{
      width: "200px",
      background: "#0f172a",
      color: "white",
      padding: "20px",
      minHeight: "80vh"
    }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {list_items.map((item,index) =>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </aside>
  )
}

function MainContent() {
  return (
    <main style={{
      flex: 1,
      padding: "20px",
      background: "#f1f5f9"
    }}>
      <h1>Welcome to the Dashboard</h1>
      <p>This is the main content area.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "#1e293b",
      color: "white",
      textAlign: "center",
      padding: "10px"
    }}>
      <p>© 2026 My App</p>
    </footer>
  );
}

function Student({name, age}) {
  return (
    <div>
      <h4>{name} is {age} years old.</h4>
    
    </div>
  )
}

const users = [
  { id: 1, name: "Jiya", age: 21 },
  { id: 2, name: "Aman", age: 22 },
  { id: 3, name: "Neha", age: 20 }
];

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Sidebar/>
        <MainContent/>
        {/* <Student name="Jiya" marks={90}/>
        <Student name="Aman" marks={70}/>
        <Student name="Arjun" marks={60}/> */}
        <div>{users.map(user => (
          <Student key={user.id} name={user.name} age={user.age}/>
        ))}</div>
      </div>
      <Footer/>
  </div>
  )
}

export default App
