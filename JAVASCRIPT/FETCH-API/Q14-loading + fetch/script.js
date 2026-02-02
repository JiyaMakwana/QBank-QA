// Q12 — Loading + fetch
// Before starting fetch:
// show "Loading..." in the DOM
// After fetch success:
// remove loading text
// show fetched data

// Q13 — Error UI handling
// If fetch fails:
// show "Failed to load data" in red text
// do NOT crash the app

let ul=document.getElementById("user-list");
async function myPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1200);
    })
}
async function getUser() {
    ul.innerHTML="<li>Loading...</li>"
    try {
        await myPromise();
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await res.json();
        ul.innerHTML="";

        if(data) {
            data.forEach(user => {
                let li=document.createElement("li");
                li.innerText=user.name;
                ul.appendChild(li);
            });
            
        }
    } catch (error) {
        ul.innerHTML="<li style='color:red'>Failed to Load data</li>"
        console.log(error);
    }
}
getUser();