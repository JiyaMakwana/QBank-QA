const postBTN = document.getElementById("postBTN");
const postsContainer = document.getElementById("postsContainer");
const postErrorDiv = document.getElementById("postErrorDiv");

// for todos
const toDoBTN = document.getElementById("toDoBTN");
// const todoErrorDiv = document.getElementById("LoadToDoError");
const completedDiv = document.querySelector("#completedToDO");
const pendingDiv = document.querySelector("#pendingToDO");


// ================= FAKE DATA =================

// const posts = [
//     { id: 1, title: "First Post" },
//     { id: 2, title: "Second Post" }
// ];

// const todos = [
//   { title:"Study", completed:true },
//   { title:"Gym", completed:false },
//   { title:"Guitar", completed:true },
//   { title:"Dinner", completed:false }
// ];
function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function load(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

let postsState = load("posts");
let todosState = load("todos");

// ================= FAKE SERVERS =================

function fakeFetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve([
                    { title: "Learn Async JavaScript" },
                    { title: "Build Dashboard UI" },
                    { title: "Practice DSA" },
                    { title: "Read Clean Code" }
                ]);
        }, 1200);
    });
}

/* -------- Render Posts -------- */
function renderPosts(posts) {

    postsContainer.innerHTML = "";

    posts.forEach((post, index) => {

        const card = document.createElement("div");

        card.className =
            "card shadow-sm border-0 rounded-4 overflow-hidden position-relative";

        card.innerHTML = `
            <img 
                src="https://picsum.photos/400/200?random=${Math.random()}"
                class="w-100"
                style="height:140px; object-fit:cover;"
            >

            <div class="p-3 d-flex justify-content-between align-items-center">

                <span class="fw-semibold small">
                    ${post.title}
                </span>

                <button 
                    class="btn btn-sm rounded-circle border-0 bg-light text-danger shadow-sm d-flex align-items-center justify-content-center"
                    style="width:28px;height:28px"
                    title="Delete"
                >
                    <i class="fa-solid fa-trash small"></i>
                </button>


            </div>
        `;

        /* DELETE logic */
        card.querySelector("button").addEventListener("click", () => {
            postsState.splice(index, 1);
            save("posts", postsState);
            renderPosts(postsState);
        });

        postsContainer.appendChild(card);
    });
}


/* -------- Loading State -------- */
function showLoading() {
    postsContainer.innerHTML = `
        <p class="loader-text">Fetching user posts, please wait…</p>
        <div class="skeleton-grid">
            <div class="skeleton skeleton-card"></div>
            <div class="skeleton skeleton-card"></div>
            <div class="skeleton skeleton-card"></div>
        </div>
    `;
}

/* -------- Error State -------- */
function showError(message) {
    postsContainer.innerHTML = `
        <p style="color:red;">${message}</p>
    `;
}

function fakeFetchTodos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

                resolve([
                    { title: "Study DSA", completed: true },
                    { title: "Build Project", completed: false },
                    { title: "Workout", completed: true },
                    { title: "Revise JS", completed: false }
                ]);
        }, 1500);
    });
}

/* -------- Initial render on page load -------- */
if (postsState.length > 0) {
    renderPosts(postsState);
}

// ================= POSTS =================

postBTN.addEventListener("click", async () => {
    /* FIRST TIME → fetch defaults */
    if (postsState.length === 0) {
        postBTN.disabled = true;
        showLoading();

        postsState = await fakeFetchPosts();
        save("posts", postsState);
        renderPosts(postsState);

        postBTN.disabled = false;
        return; // stop here
    }

     /* AFTER FIRST LOAD → open modal */
    const modal = new bootstrap.Modal(document.getElementById("addPostModal"));
    modal.show();

    const input = document.getElementById("postInput");
    const saveBtn = document.getElementById("savePostBtn");

    input.value = "";
    input.focus();

    saveBtn.onclick = () => {
        const title = input.value.trim();
        if (!title) return;

        postsState.push({ title });
        save("posts", postsState);
        renderPosts(postsState);

        modal.hide();
    };
});





// ================= TODOS =================

function createTodoItem(todo, index) {

    const item = document.createElement("div");

    item.className =
        "list-group-item d-flex justify-content-between align-items-center rounded-3 shadow-sm";

    const left = document.createElement("div");
    left.className = "d-flex align-items-center gap-2";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.checked = todo.completed;

    const label = document.createElement("span");
    label.innerText = todo.title;

    if (todo.completed) {
        label.classList.add("text-decoration-line-through", "text-muted");
    }

    /* toggle */
    checkbox.addEventListener("change", () => {
        todosState[index].completed = checkbox.checked;
        save("todos", todosState);
        renderTodos(todosState);
    });

    /* DELETE button */
    const delBtn = document.createElement("button");

    delBtn.className =
        "btn btn-sm rounded-circle border-0 bg-light text-danger shadow-sm d-flex align-items-center justify-content-center";

    delBtn.style.width = "26px";
    delBtn.style.height = "26px";

    delBtn.innerHTML = `<i class="fa-solid fa-xmark small"></i>`;


    delBtn.addEventListener("click", () => {
        todosState.splice(index, 1);
        save("todos", todosState);
        renderTodos(todosState);
    });

    left.append(checkbox, label);

    item.append(left, delBtn);

    return item;
}



function renderTodos(todos) {


    completedDiv.innerHTML = "";
    pendingDiv.innerHTML = "";

    todos.forEach((todo,index) => {
        const el = createTodoItem(todo, index);

        if (todo.completed) {
            completedDiv.appendChild(el);
        } else {
            pendingDiv.appendChild(el);
        }
    });
}


/* -------- Loading -------- */
function showTodosLoading() {

    completedDiv.innerHTML = `
        <div class="skeleton skeleton-row"></div>
        <div class="skeleton skeleton-row"></div>
    `;

    pendingDiv.innerHTML = `
        <div class="skeleton skeleton-row"></div>
        <div class="skeleton skeleton-row"></div>
    `;
}

function showTodosError(message) {
    completedDiv.innerHTML = `<p style="color:red;">${message}</p>`;
    pendingDiv.innerHTML = "";
}

/* -------- Initial render on page load -------- */
if (todosState.length > 0) {
    renderTodos(todosState);
}

toDoBTN.addEventListener("click", async () => {

    /* FIRST TIME → fetch defaults */
    if (todosState.length === 0) {
        toDoBTN.disabled = true;
        showTodosLoading();

        todosState = await fakeFetchTodos();
        save("todos", todosState);
        renderTodos(todosState);

        toDoBTN.disabled = false;
        return;
    }
     /* AFTER FIRST LOAD → open modal */
    const modal = new bootstrap.Modal(document.getElementById("addTodoModal"));
    modal.show();

    const input = document.getElementById("todoInput");
    const checkbox = document.getElementById("todoCompleted");
    const saveBtn = document.getElementById("saveTodoBtn");

    input.value = "";
    checkbox.checked = false;
    input.focus();

    saveBtn.onclick = () => {
        const title = input.value.trim();
        if (!title) return;

        todosState.push({
            title,
            completed: checkbox.checked
        });

        save("todos", todosState);
        renderTodos(todosState);

        modal.hide();
    };
});




document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-link.active")?.classList.remove("active");
    link.classList.add("active");
  });
});

