// Q11 — GET + DOM rendering
// Fetch users from:
// https://jsonplaceholder.typicode.com/users
// Tasks:
// extract user names
// display them as <li> inside a <ul>
let ul=document.getElementById("user-list");
async function getUser() {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await res.json()

        if(data) {
            data.forEach(user => {
                let li=document.createElement("li");
                li.innerText=user.name;
                ul.appendChild(li);
            });
            
        }
    } catch (error) {
        console.log(error);
    }
}
getUser();