// Rewrite:
// step1()
//   .then(r1 => step2(r1))
//   .then(r2 => step3(r2))
//   .then(final => console.log(final));

// 👉 3 awaits
function step1()
{
    //async or this way both are correct
    return Promise.resolve("Hello");
}
async function step2(step)
{
    return "step2 "+ step;
}
function step3(step)
{
    return "step3 "+ step;
}

async function load(){
    let s1=await step1();
    let s2= await step2(s1);
    let s3=await step3(s2);

    console.log(s3);
}
load();