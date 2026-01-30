// Q13 — Mini integration (capstone)
// You receive this data after a Promise resolves:
// [
//   {title:"Task A", completed:true},
//   {title:"Task B", completed:false},
//   {title:"Task C", completed:false}
// ]

// Tasks:
// filter incomplete tasks
// map to titles only
// display them as <li> items
// use reduce to show total incomplete count
let ulList=document.getElementById("ulList");

function myPromise() {
    return new Promise((resolve) => 
    resolve([
            {title:"Task A", completed:true},
            {title:"Task B", completed:false},
            {title:"Task C", completed:false},
            {title:"Task D", completed:true},
            {title:"Task E", completed:false},
            {title:"Task F", completed:false}
            ])
        );
}
// myPromise().then(res=>console.log(typeof(res)));

myPromise().then((arr) => {

    // filter incomplete tasks and map to titles only
    return {
        titles: arr.filter((task) => task.completed===false).map((task) => task.title),
        count: arr.reduce((acc,currTask) => !currTask.completed ? acc+1 : acc, 0)
    }
    
}).then(( {titles,count}) => {
    titles.forEach(title => {
        let li=document.createElement("li");
        li.className="list-group list-group-item";
        li.innerText=title;
        ulList.appendChild(li);
    });

    let countLi=document.createElement("li");
    countLi.className = "list-group list-group-item fw-bold";
    countLi.innerText = `Total Incomplete: ${count}`;
    ulList.appendChild(countLi);
    
});