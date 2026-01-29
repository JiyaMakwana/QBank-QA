// let promise=new Promise((resolve,reject) => {
//     let success=true;

//     if(success)
//     {
//         resolve("Task Done");
//     }
//     else{
//         reject("Task incomplete");
//     }

// });

async function async_Promise()
{
    let a = 10, b = 1;
    console.log("i'm from async_Promise() function")
    let sum = a + b;
    console.log(`Sum:: ${sum}`);
    return sum;  

}

async function load()
{
    let success = await async_Promise();
    console.log("Returned value:", success);
}
load();