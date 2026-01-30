// Q4 — Print only 1 property
// Same fetch.
// Task:
// Print only first user name.
async function users() {
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    console.log(data[0].name);
}
users();