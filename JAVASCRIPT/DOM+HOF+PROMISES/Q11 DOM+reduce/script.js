// Q11 — DOM + reduce
// You have multiple <li> items inside a <ul>.

// Task:
// use reduce to count total list items
// show count inside a <span>
let div=document.getElementById("spanDiv");
let span=document.createElement("span");
let ul=document.getElementById("ulList");

let items=Array.from(ul.querySelectorAll("li"));

let count=items.reduce((acc)=>acc+1, 0);
console.log(count);
span.innerText=count;
div.appendChild(span);