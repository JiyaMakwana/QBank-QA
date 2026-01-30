
function login() {
    return new Promise((resolve) =>{
        console.log("⌛ Loading Dasboard...")
        setTimeout(() => {
            resolve("👱 You logged in");
        },1000);
    });
}

function getPosts() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("🤳 Posts Loaded");
        },1000);
    });
}
function getFriends() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("🤝 180 Friends");
        },1000);
    });
}

function getMessages() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("💬 2 Messages")
        },1000);
    });
}

async function load() {
    try {
        let user=await login();
        console.log(user);

        let [post,friends, message]=await Promise.all([getPosts(),getFriends(),getMessages()]);
        console.log(post,friends, message);
    } catch (err) {
        console.log("Error");
    }
}
load();