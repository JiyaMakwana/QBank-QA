// Q2 — Return value
// getNumber() returns 10 after 1s.
// Store it in variable and print:
async function getNumber()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(10);
            },1000);
    });
}

async function load(){
    let data=await getNumber();
    console.log(`Number is ${data}`);
}
load();