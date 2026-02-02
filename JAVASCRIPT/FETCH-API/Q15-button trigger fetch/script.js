// Q14 — Button-triggered fetch
// Create a button "Load Posts".
// On click:
// fetch posts
// display only titles in the DOM
let ul=document.getElementById("user-list");
let loadBtn=document.getElementById("loadBTN");
async function myPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1200);
    })
}
loadBtn.addEventListener("click", async function(){
    ul.innerHTML="<li>Loading...</li>"
    try {
        await myPromise();
        let res=await fetch("https://jsonplaceholder.typicode.com/posts");
        let data=await res.json();
        ul.innerHTML="";

        if(data) {
            data.forEach(post => {
                let li=document.createElement("li");
                li.innerText=post.title;
                ul.appendChild(li);
            });
            
        }
    } catch (error) {
        ul.innerHTML="<li style='color:red'>Failed to Load data</li>"
        console.log(error);
    }
})

