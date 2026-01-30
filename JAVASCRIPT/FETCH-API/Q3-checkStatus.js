// Q5 — Check status manually
// Before converting to JSON:
// Task:

// if(response.ok)
//    console.log("Success")
// else
//    console.log("Failed")
async function check() {
    let res=await fetch("https://jsonplaceholder.typicode.com/users");
    // let data=await res.json();

    // response.ok
    // response.status
    if(res.ok)
        console.log("Success " + res.ok)
    else
        console.log("Failed "+res.ok)
    
}
check();