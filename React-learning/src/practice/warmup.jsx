import { useState } from "react";

const prices=[100,200,300,400];
function Transform() {
    const newArr=prices.map(arr => arr*0.9);
    return(
        <>
            <h2>Original Price</h2>
            <ul>
                {prices.map((price,index) => (
                    <li key={index}>$ {price}</li>
                ))}
            </ul>

            <h2>Discounted Price 10%</h2>
            <ul>
                {newArr.map((price,index) => (
                    <li key={index}>$ {price}</li>
                ))}
            </ul>
        </>
    );
}

// filter + map
function Student() {
    const students=[
        { name: "Jiya", marks: 80 },
        { name: "Aman", marks: 35 },
        { name: "Neha", marks: 90 },
        { name: "Ravi", marks: 30 }
    ];

    return (
        <>
            <h2>Name of Students</h2>
            <p>who scored more than 40</p>
            <ul>
                {students.filter(student => student.marks>=40)
                            .map((student,index)=>(
                                <li key={index}>{student.name}</li>
                            ))}
            </ul>
        </>
    ) 
}

// 3️⃣ Arrow + Template Literal
const GreetUser=({name,city}) =>{
    return (
        <>
            <h3>{`Hello ${name} from ${city}`}</h3>
        </>
    )
}

// 4️⃣ Profile Card Component
function ProfileCard({name, role, city}) {
    const users = [
        { id: 1, name: "Jiya", age: 21 },
        { id: 2, name: "Aman", age: 22 },
        { id: 3, name: "Neha", age: 20 }
];

    return (
        <>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
            <div>
                <p>{role}</p>
                <p>{city}</p>
            </div>
        </>
    )
}

// 7️⃣ Counter with Limits
function Counter() {
    const [count, setCount]=useState(0);

    const increase = () => {
        setCount(prev => prev + 1);
    };

    const decrease = () => {
        if(count > 0) {
            setCount(prev => prev - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };
    
    return (
        <div>
            <h2>Counter:: {count}</h2>
            {/* Short Method */}
            {/* <button onClick={()=>setCount(count + 1)}>Increase</button>
            <button onClick={()=> count > 0 && setCount(count - 1)}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button> */}

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>

            {count > 10 && <p style={{color :"red"}}>High value!</p>}
        </div>
    )
}

// 8️⃣ Toggle Dark Mode
function Theme() {
    const [darkMode, setDarkMode ] = useState(false);

    return (
        <div style={{
            backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
            color: darkMode ? "white" : "black",
            // minHeight:"50vh",
            padding:"20px"
        }}>

            <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        </div>
    )
    
}

function Wrap() {
    return(
        <>
            {/* <Transform/>
            <Student/> */}
            
            <GreetUser name="Jiya" city="Ahmedabad"/>
            <ProfileCard name="Jiya" role="Software Developer" city="Ahmedabad"/>
            <Counter/>
            <Theme/>
        </>
    )
}

export default Wrap;