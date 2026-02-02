// Q5 — Network error handling
// Simulate a wrong URL (example: /postsss).
// Tasks:
// catch the error
// log "Network or server error occurred"
async function getSingleResource() {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/postsss");
        let data=await res.json();

        if(!res.ok) throw new Error();
        console.log(data);

    } catch (error) {
        console.log("Network or server error occurred");
    }
}

getSingleResource()