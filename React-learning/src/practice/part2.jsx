import { useState } from "react";

function Calculator() {
    const [showProducts, setShowProducts] =useState(false);
    const toggleProducts = () =>{
        setShowProducts(prev => !prev)
    }

    const items = [
                    { id: 1, name: "Phone", price: 20000 },
                    { id: 2, name: "Laptop", price: 50000 },
                    { id: 3, name: "Watch", price: 3000 }
                ];
            
    
    let initialTotal=items.reduce((sum,item) => sum+item.price,0);

    const [total, setTotal]=useState(initialTotal);
    
    const applyDiscount = () => {
        setTotal(initialTotal * 0.9);
    }

    return (
        <>
            <button onClick={toggleProducts} 
                    style={{backgroundColor:"lightblue"}}>
                {showProducts ? "Hide Products" : "Show Products"}
            </button>

            {/* conditional rendering */}

            { showProducts && (
                <>
                    {items.map((item,index) => (
                    <p key={index}>{`${item.name} - ₹${item.price}`}
                        {" "} {/*space*/} 
                        <span 
                            style={{backgroundColor:item.price > 10000 ? "red":"green",
                                    color:"white",
                                    fontSize:"10px",
                                    padding:"2px 8px",
                                    borderRadius:"40px",
                                    marginLeft:"5px"
                            }}
                        >       
                            {item.price > 10000 ? "Premium" : "Budget"}
                        </span>
                    </p>  
                    ))}

                    <h3>Total:: ₹{total}</h3>
                    <p>🥳 Want Discount? 👇</p>
                    <button 
                        style={{backgroundColor:"green", color:"white"}}
                        onClick={applyDiscount}>
                    
                    Click Me</button>
                </>
            )}    
        </>
    );
}
// in map ()-> automatically return , {}-> must use return
function StudentList() {
    const initialStudents = [
                                { id: 1, name: "Jiya", marks: 80 },
                                { id: 2, name: "Aman", marks: 35 },
                                { id: 3, name: "Neha", marks: 90 }
                            ];
    
    return (
        <>
            <ul style={{ listStyle: "none" }}>
                {initialStudents.map((student,index) => {
                    return <li key={index}>{`Id:: ${index} , Name:: ${student.name} , Marks:: ${student.marks}`}
                            {" "} {/*space*/} 
                            <span 
                                style={{backgroundColor:student.marks >= 40 ? "Green":"Red",
                                        color:"white",
                                        fontSize:"10px",
                                        padding:"2px 8px",
                                        borderRadius:"40px",
                                        marginLeft:"5px"
                                }}
                            >       
                                {student.marks > 40 ? "Pass" : "Fail"}
                            </span>
                    
                    </li>
                })}
            </ul>
            
        </>
    )

    
}


function Wrapper() {
    return (
        <>
            {/* <Calculator/> */}
            <StudentList/>
        </>
    ) 
}

export default Wrapper;