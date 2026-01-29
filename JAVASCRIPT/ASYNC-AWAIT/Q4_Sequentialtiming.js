// Each function takes 1s:
// step1()
// step2()
// step3()
// Run sequentially...each=> no promise.all()..its for parallel
function step1()
{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            console.log("step 1");
            resolve();
        },1000)
    });
}
function step2()
{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            console.log("step 2");
            resolve()
        },1000)
    });
}
function step3()
{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            console.log("step 3");
            resolve()
        },1000)
    });
}

async function load(){
    console.time("Total time");

    await step1();
    await step2();
    await step3();

    // console.log(`${d1} ${d2} ${d3}`);
    console.timeEnd("Total time");
}
load();