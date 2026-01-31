const postBTN = document.getElementById("postBTN");
const postsContainer = document.getElementById("postsContainer");
const postErrorDiv = document.getElementById("postErrorDiv");

// for todos
const toDoBTN = document.getElementById("toDoBTN");
const todoErrorDiv = document.getElementById("LoadToDoError");
const completedToDoDiv = document.getElementById("completedToDO");
const pendingToDoDiv = document.getElementById("pendingToDO");


// ================= FAKE DATA =================

const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
];

const todos = [
  { title:"Study", completed:true },
  { title:"Gym", completed:false },
  { title:"Guitar", completed:true },
  { title:"Dinner", completed:false }
];


// ================= FAKE SERVERS =================

function fakeServerPosts() {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.5;

        setTimeout(() => {
            success ? resolve(posts) : reject("Error Loading Posts!");
        }, 1500);
    });
}

function fakeServerToDO() {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.5;

        setTimeout(() => {
            success ? resolve(todos) : reject("Error Loading ToDOs!");
        }, 1500);
    });
}



// ================= POSTS =================

postBTN.addEventListener("click", async function () {

    postErrorDiv.innerText = "⌛ Loading posts...";
    postsContainer.innerHTML = "";
    postBTN.disabled = true;

    try {
        const postData = await fakeServerPosts();
        postErrorDiv.innerText = "";

        postData.forEach(p => {
            const col = document.createElement("div");
            col.className = "col";

            col.innerHTML = `
                <div class="card shadow-sm border-0 rounded-3 p-3 h-100">
                    <div class="fw-semibold">${p.title}</div>
                </div>
            `;

            postsContainer.appendChild(col);
        });

    } catch (error) {
        postErrorDiv.innerText = error;
    } finally {
        postBTN.disabled = false;
    }
});




// ================= TODOS =================

function createTodoElement(todo) {

    const item = document.createElement("div");
    item.className = "list-group-item d-flex align-items-center gap-2";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.checked = todo.completed;

    const label = document.createElement("span");
    label.innerText = todo.title;

    // if (todo.completed) {
    //     label.classList.add("text-decoration-line-through", "text-muted");
    // }

    item.append(checkbox, label);

    return item;
}


function renderCompleted(todos) {
    completedToDoDiv.innerHTML = "";

    todos.forEach(todo => {
        completedToDoDiv.appendChild(createTodoElement(todo));
    });
}

function renderPending(todos) {
    pendingToDoDiv.innerHTML = "";

    todos.forEach(todo => {
        pendingToDoDiv.appendChild(createTodoElement(todo));
    });
}



toDoBTN.addEventListener("click", async function () {

    todoErrorDiv.innerText = "⌛ Loading todos...";
    toDoBTN.disabled = true;

    try {
        const todoData = await fakeServerToDO();
        todoErrorDiv.innerText = "";

        const completed = todoData.filter(t => t.completed);
        const pending = todoData.filter(t => !t.completed);

        renderCompleted(completed);
        renderPending(pending);

    } catch (error) {
        todoErrorDiv.innerText = error;
    } finally {
        toDoBTN.disabled = false;
    }
});



document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-link.active")?.classList.remove("active");
    link.classList.add("active");
  });
});
