import React from "react";

function Navbar() {
  return (
    <nav style={{background: "#1e293b", color:"white",padding:"15px 20px"}}>
      <h2>My Dashboard</h2>
    </nav>
  );
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

/* MAIN COMPONENT */
function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}

export default Layout   // 👈 IMPORTANT