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

function Wrap() {
    return(
        <>
            <Transform/>
            <Student/>
        </>
    )
}

export default Wrap;