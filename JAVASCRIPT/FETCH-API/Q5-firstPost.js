// Q7 — First POST (very basic)
// Just copy structure and understand.
// Task:
// Send:
// POST /posts
// Print response.
async function users() {
    try {
        const res= await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers: { "Content-Type" : "application/json"},
            body:JSON.stringify({
                title: "My First Post",
                userId: 1,
                body: "Learning POST request",
            })
        });
        const data=await res.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
    
}
users();