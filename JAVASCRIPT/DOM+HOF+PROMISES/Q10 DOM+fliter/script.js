// Q10 — DOM + filter
// You have this array:
// ["Done: Task 1", "Pending: Task 2", "Done: Task 3"]

// Tasks:
// filter only "Pending" tasks
// display them in the DOM
let arr=["Done: Task 1", "Pending: Task 2", "Done: Task 3"];
let div=document.getElementById("textShow");


function filterTasks()
{
    let task=arr.filter((value)=>{
        return value.includes("Pending");
    });
    // console.log(task);
    task.forEach(element => {
        let p=document.createElement("p");
        p.innerText=element;
        div.appendChild(p);
    });
    
}
filterTasks()



