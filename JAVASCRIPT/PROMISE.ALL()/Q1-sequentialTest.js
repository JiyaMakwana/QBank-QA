// Q3 — Store results
// Each returns:
// api1 → "A"
// api2 → "B"
// api3 → "C"

// Using Promise.all, print:
// A B C

// (Hint: array destructuring)
async function api1() {
    return "A";
}
async function api2() {
    return "B";
}
async function api3() {
    return "C";
}

async function load() {
    let [a,b,c]=await Promise.all([api1() , api2(), api3()]);
    console.log(a,b,c);
}
load();