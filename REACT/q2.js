const users=async()=> { 
        let response=await fetch("https://jsonplaceholder.typicode.com/users"); 
        let data=await response.json(); 
        const names=data.filter(user => user.id<=5 ).map(user => user.email); 
        console.log(names)};

users();