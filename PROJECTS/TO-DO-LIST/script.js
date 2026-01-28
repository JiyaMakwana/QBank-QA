let tasks=[];

let taskInput=document.getElementById("task-input");
let addBtn=document.getElementById("task-add-button");
let allBtn=document.getElementById("allBtn");
let completeBtn=document.getElementById("completeBtn");
let pendingBtn=document.getElementById("pendingBtn");

function fakeSavePromise(task){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(task);
        },1000);
    })
}

addBtn.addEventListener("click",function(){

    let taskText=taskInput.value;

    let newTask={
        id:Date.now(),
        text:taskText,
        completed: Math.random() > 0.5
    };

    // tasks.push(newTask);
    console.log(tasks);
    console.log("called")
    // showTasks(tasks);

    taskUL.innerHTML="<li class='list-group-item text-center text-muted shadow-sm rounded mb-2'>Saving...</li>";
    fakeSavePromise(newTask).then((savedTask) => {
        tasks.push(savedTask);
        showTasks(tasks);
    });

    //to clear textbox after one value is entered
    taskInput.value="";
});

let taskUL=document.getElementById("show-task");
function showTasks(list){
    //clearing old task list 
    taskUL.innerHTML="";

    list.map((task) => {
        let li=document.createElement("li");
        li.className = "list-group-item shadow-sm mb-2 rounded d-flex align-items-center";
        li.innerText=task.text;
        taskUL.appendChild(li);
    });
}

allBtn.addEventListener("click",() => { showTasks(tasks)});

completeBtn.addEventListener("click",()=>{
    let completed=tasks.filter((task) =>task.completed===true);
    showTasks(completed);
});

pendingBtn.addEventListener("click",()=>{
    let pending=tasks.filter((task) =>task.completed===false);
    showTasks(pending);
});