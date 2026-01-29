// Q12 — Custom error message

// If API fails, print:
// Server is down. Try later
// Instead of original error.

function fakeApi() {
    return new Promise((resolve,reject)=> {
        let fetch=false;
        setTimeout(()=> {
            if(fetch===true) {
                resolve("Success");
            } else {
                reject("Server is down. Try later.☹️");
            }
        },1000);
    })
}

async function load() {
    try {
        let api=await fakeApi();
        console.log(api);
    } catch (err) {
        console.log(err)
    }
}
load();