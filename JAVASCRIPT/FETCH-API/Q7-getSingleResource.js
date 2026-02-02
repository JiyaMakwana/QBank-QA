// Q3 — GET single resource
// Make a GET request to:
// https://jsonplaceholder.typicode.com/posts/1

// Tasks:
// check response status
// convert to JSON
// log the post object

async function getSingleResource() {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if(res.ok) {
            console.log(res.status);
            let data=await res.json();
            console.log(data);
        }
    } catch (error) {
        console.log("Failed to fetch post");
    }
}

getSingleResource()