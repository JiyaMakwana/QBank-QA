// Q11 — Stop execution
// Create:
// step1() → success
// step2() → reject
// step3() → success

// If step2 fails, step3 should NOT run.
// 👉 Use one try/catch
function step1()
{
    //async or this way both are correct
    return Promise.resolve("success");
}
async function step2(step)
{
    return Promise.reject("reject")
}
function step3(step)
{
    return Promise.resolve("success");
}

async function load(){
    try {
        let s1=await step1();
        console.log(s1);

        let s2= await step2();
        console.log(s2);

        let s3=await step3();
        console.log(s3);
    } catch (error) {
        console.log(error);
    }
    
}
load();