// Create:

// async function safeFetch()
// It should:
// call fakeApi
// return "Success" or "Error"

// 👉 Never crash
function fakeApi() {
    return new Promise((resolve,reject)=>{
        let random=Math.random() > 0.5;
         
        random ? resolve("Data Loaded") : reject("Data rejected");
    });
}

async function safeFetch() {
    try {
        await fakeApi();
        return "Success";
    } catch (error) {
        return "Error";
    }
}

async function display() {
    let data=await safeFetch();
    console.log(data);
}
display();