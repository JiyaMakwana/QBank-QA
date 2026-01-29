// Create fakeApi() that resolves "Hello" after 1s.
// Using async/await print:

function fakeApi() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello");
        },1000);
    })
}

async function load() {
    let data=await fakeApi();
    console.log(data);
}
load();