let loadBtn=document.getElementById("loadBtn");
let ul=document.getElementById("textContainer");

function getUser() {
    return new Promise((resolve) =>{
        console.log("⌛ Loading Dasboard...")
        setTimeout(() => {
            resolve("👱 User Loaded")
        },1000);
    });
}

function getPosts() {
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
loadBtn.addEventListener("click", function(){
    ul.innerText="⌛ Loading Dashboard...";
    async function load() {
        try {
            let [user,post, comment]=await Promise.all([getUser(),getPosts(),getComments()]);
            ul.innerText=`${user} ${post} ${comment}`;
        } catch (err) {
            console.log("Error");
        }
    }
    load();
});
