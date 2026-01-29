// // Q9 — Basic error
// fakeApi randomly:
// resolve OR reject

// Using await:
// success → print result
// error → print "Failed"

// 👉 must use try/catch
function fakeApi() {
    return new Promise((resolve,reject)=>{
        let success=true;
        setTimeout(()=> {
            if(success===false) {
                resolve("Success");
            } else {
                reject("Failed");
            }
        },1000);
    });
}

async function load() {
    try {
        let result=await fakeApi();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
load();