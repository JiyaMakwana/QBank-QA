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

async function safeLoad() {
    try {
        let [a1,a2,a3]=await Promise.all([api1(), api2(), api3()]);
        return (a1,a2,a3);
    } catch (error) {
        return "Failed to Load Data";
    }
}
async function load() {
    let data=await safeLoad();
    console.log(data);
}
load();