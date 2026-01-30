async function users() {
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    data.forEach(user => {
        console.log(user.name);
    });
}
users();