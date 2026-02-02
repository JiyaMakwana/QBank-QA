// Q8 — GET vs POST thinking
// Write two functions:
// getUsers()
// createUser(userData)

// Tasks:
// getUsers uses GET
// createUser uses POST
// both return JSON data
async function getUsers(){
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if(!res.ok) throw new Error();
        return await res.json();
    } catch (error) {
        return error;
    }

}
async function createUser(userData) {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        });
        
        if(!res.ok) throw new Error();
        return await res.json();
    } catch (error) {
        return error;
    }
}

getUsers().then(data => console.log(data));

createUser({
    title: "Learn Fetch",
    body: "Practicing POST request",
    userId: 1
}).then(data => console.log(data));