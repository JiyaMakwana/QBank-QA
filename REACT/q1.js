const users=async()=> 
    { let response=await fetch("https://jsonplaceholder.typicode.com/users"); 
        let data=await response.json(); 
        const names=data.map(user => user.name); 
        console.log(names)};

        users();