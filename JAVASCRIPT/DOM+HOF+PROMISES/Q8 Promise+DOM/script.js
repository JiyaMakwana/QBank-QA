// ou have a button with id loadBtn.
// Task:
// when clicked → show text "Loading..." inside a <p>
// after 2 seconds → change text to "Data Loaded"
// Use a Promise.
let loadBtn=document.getElementById("loadBtn");
let textContainer=document.getElementById("textContainer");

function fakeLoad()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000);
    })
}
loadBtn.addEventListener("click", function(){
    let p=document.createElement("p");
    p.innerText="⌛Loading...";
    textContainer.appendChild(p);
    
    fakeLoad().then((msg)=>{
        p.innerText="Data Loaded Successfully!😊"
    })
});