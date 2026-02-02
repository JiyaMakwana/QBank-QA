// Q10 — JSON parsing safety
// Write code that:
// safely parses JSON
// logs "Invalid JSON response" if parsing fails
// (Hint: try/catch)
async function safeParse(response) {
    try {
        return await response.json();
    } catch (error) {
        console.log("enable to parse");
        return null;
    }
}

async function getData() {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await safeParse(res);
        if(data)console.log(data);

    } catch (error) {
        console.log(error);
    }
}
getData();