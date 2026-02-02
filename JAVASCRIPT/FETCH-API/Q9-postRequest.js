// Q6 — Basic POST request
// Write a POST request using fetch() to:
// https://jsonplaceholder.typicode.com/posts

// Send this data:
// {
//   title: "Learn Fetch",
//   body: "Practicing POST request",
//   userId: 1
// }

// Tasks:
// set correct method
// add headers
// convert body to JSON
// log response JSON
async function postRequest() {
  let res=await fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify({
      title: "Learn Fetch",
      body: "Practicing POST request",
      userId: 1
    })
  })
  let data=await res.json();
  console.log(data);
}
postRequest()