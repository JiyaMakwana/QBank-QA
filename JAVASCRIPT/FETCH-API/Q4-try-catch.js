
async function users() {
    try {
        const res= await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data[0].name);

    } catch (error) {
        console.log(error);
    }
    
}
users();