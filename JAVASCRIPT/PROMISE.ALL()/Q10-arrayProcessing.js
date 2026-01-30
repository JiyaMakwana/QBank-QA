// Create a Promise that resolves with:
// [10, 20, 30]
// Use Promise.all to:
// run async operation on each number (multiply by 2 after delay)
// return final array
function getNumbers() {
    return new Promise((resolve, reject) => {
        resolve([10, 20 ,30 ]);
    });
}
function delay(){
    return new Promise(resolve => setTimeout(resolve,2000));
}

async function multiply(num) {
    await delay();
    return num*2;
}

async function load() {
    let nums=await getNumbers();

    let result= await Promise.all(nums.map(multiply()));
    console.log(result);
}
load();