const postBTN=document.getElementById("postBTN");
const postsContainer=document.getElementById("postsContainer");
const statusDiv=document.getElementById("statusDiv");

// pretend this is your database
const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
];

const todos = [
  { title:"Study", completed:true },
  { title:"Gym", completed:false }
];


function fakeServerPosts()
{
    return new Promise((resolve,reject)=>{
        let success=Math.random() > 0.5;
        // loadDiv.innerText="Loading...";
        setTimeout(() => {
            if(success) {
                resolve(posts);
            }else {
                reject("Error Loading Posts!");
            }
        }, 2000);
    })
}
postBTN.addEventListener("click",async function() {
    statusDiv.innerText="Loading..."  //shows loading before promise call
    postsContainer.innerHTML="";
    postBTN.disabled=true;

        try {
                let post=await fakeServerPosts();
                statusDiv.innerText="";   //clear after promise is called
                // postBTN.setAttribute=("disabled","false");

                post.forEach(p => {
                    
                    const div=document.createElement("div");
                    div.innerText=p.title;
                    postsContainer.appendChild(div);
                });
                
        } catch (error) {
            statusDiv.innerText="Error loading posts ❌"
            console.log(error);
        } finally {
            postBTN.disabled=false;
        }

    // statusDiv.innerText="i am a static data fetched after clicking add new post button";
    
});