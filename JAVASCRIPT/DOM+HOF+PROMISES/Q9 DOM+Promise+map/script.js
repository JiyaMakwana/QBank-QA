// Q9 — DOM + Promise + map

// After the Promise resolves, you receive:
// ["HTML", "CSS", "JS"]

// Tasks:
// use map to convert them to uppercase
// create <li> elements
// append them to an existing <ul>
let ul=document.getElementById("ulList");

function promise()
{
    return new Promise((resolve)=> resolve(["html", "css", "js"]));
}

let li;

promise().then((arr)=>{
    let valueArr=arr.map((val)=>
    {
        return val.toUpperCase()
    });

    valueArr.forEach(element => 
    {
        li=document.createElement("li");
        li.setAttribute("class","list-group-item");
        li.innerText=element;
        ul.appendChild(li);
    });
});
