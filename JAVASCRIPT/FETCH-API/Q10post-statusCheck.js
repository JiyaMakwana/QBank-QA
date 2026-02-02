// Q7 — POST + status check
// Enhance Q9:
// check response.status
// if status is 201, log "Post created successfully"
// otherwise throw an error
async function postRequest() {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({
            title: "Learn Fetch",
            body: "Practicing POST request",
            userId: 1
            })
        })
       

            if(res.ok && res.status===201) {
                console.log("Post created successfully")

                let data= await res.json();
                console.log(data)
            }
            else{
                throw new Error();
            }

        } catch (error) {
                console.log("201 not found")
        }
  
}
postRequest()