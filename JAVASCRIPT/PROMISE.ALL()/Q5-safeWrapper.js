// Q7 — Safe wrapper

// Create:
// async function safeLoad()

// It should:
// try Promise.all
// return data OR "Error"
async function api1() {
    return "success";
}
async function api2() {
    return Promise.reject("reject");
}
async function api3() {
    return "success";
}

async function load() {
    try {
        let [a1,a2,a3]=await Promise.all([api1(), api2(), api3()]);
        console.log(a1,a2,a3);
    } catch (error) {
        console.log("Failed to Load Data");
    }
}
load();