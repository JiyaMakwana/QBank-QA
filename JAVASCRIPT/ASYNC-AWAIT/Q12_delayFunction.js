// Q14 — Delay function
// Create:

// await delay(2000)
// that waits 2 seconds.
// (Hint: Promise + setTimeout)
// Use it like:

// console.log("Wait");
// await delay(2000);
// console.log("Go");

async function fakeApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🚦 Wait");
        },2000)
    });
}
function delay(sec){
    return new Promise(resolve => {
        setTimeout(resolve,sec)
    });
}
async function load() {
    try {
        let api=await fakeApi();
        console.log(api);
        await delay(2000);
        console.log("🚍 Go");

    } catch (err) {
        console.log(err);
    }
}
load();
