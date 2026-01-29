// Q15 — Mini real-life

// Make:
// getUser()
// getPosts()
// getComments()

// Using await:
// Print:
// Fetching...
// User loaded
// Posts loaded
// Comments loaded
// All done

// Sequential order only.

function getUser() {
    return new Promise((resolve) =>{
        console.log("⌛ Fetching...")
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
            resolve("💬 Comments Loaded")
        },1000);
    });
}

async function load() {
    try {
        let user=await getUser();
        console.log(user);

        let post=await getPosts();
        console.log(post);

        let comment=await getComments();
        console.log(comment);
        console.log("All done ✅");

    } catch (err) {
        console.log("Error");
    }
}
load();