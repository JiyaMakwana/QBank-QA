// Q8 — Dashboard loader (mini real life)
// Simulate:
// getUser()
// getPosts()
// getNotifications()

// Flow:
// Loading dashboard...
// (all 3 parallel)
// Show all data together

// 👉 This is EXACTLY how real apps work

function getUser() {
    return new Promise((resolve) =>{
        console.log("⌛ Loading Dasboard...")
        setTimeout(() => {
            resolve("👱 User Loaded")
        },1000);
    });
}

function getPosts(user) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("🤳 Posts Loaded")
        },1000);
    });
}

function getComments() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("💬 2 Notifications")
        },1000);
    });
}

async function load() {
    try {
        let [user,post, comment]=await Promise.all([getUser(),getPosts(),getComments()]);
        console.log(user,post,comment);
    } catch (err) {
        console.log("Error");
    }
}
load();