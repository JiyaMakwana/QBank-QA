let promise=new Promise((resolve,reject) => {
    let success=true;

    if(success)
    {
        resolve("Task Done");
    }
    else{
        reject("Task incomplete");
    }

});

promise.then(result=>console.log(result))
        .catch(error=>console.log(error));

// Practice 2 — Fake API (setTimeout)
function fakeAPI()
{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Data Loaded after 2s");
        },2000);
    });
}

fakeAPI().then(res=>{
    console.log(res + "::resolved");
    // return res;
})
.catch(err=>{
    console.log(err + "::reject");
})

// 🧪 Practice 3 — Add error handling
// suppose ..generate random number greater than 0.5..if generated print success and if not fail..and print the stmt finished at last compulsorily
let myPromise = () => {
    return new Promise((resolve,reject) => {
        let generate=Math.random() > 0.5;
        setTimeout(()=>{
            if(generate)
            {
                resolve("Generated");
            }
            else{
                reject("Not generated");
            }

        },3000);
    });
}

myPromise().then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>console.log("Finished"));

// ✅ Task 1
// Delay message 3 seconds
// Output: "Hello after 3s"
const task1promise=new Promise((resolve,reject)=> {
    let success=false;
    setTimeout(() => {
        if(success)
        {
            resolve("Hello after 3s");
        }else{
            reject("error")
        }
    },3000);
});

task1promise.then(res=>console.log(res))
.catch((err)=> console.log(err));

// Create promise that returns square of number after 1s
function square(num)
{
    return new Promise((resolve,reject) => {
        let sq=num*num;
        setTimeout(() => {
            resolve(`Square is:: ${sq}`);
        },1000);
    });
}
square(2).then(res=>console.log(res))
.catch(()=>console.log("error"));