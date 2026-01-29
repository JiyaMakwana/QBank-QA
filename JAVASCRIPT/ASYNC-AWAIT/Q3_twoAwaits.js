// Q3 — Two awaits

// Create:
// getA() → "A"
// getB() → "B"
async function getA() {
    return "A";
}
async function getB() {
    return "B";
}

async function load() {
    let data1=await getA();
    let data2=await getB();

    console.log(`${data1} ${data2}`);
}
load();