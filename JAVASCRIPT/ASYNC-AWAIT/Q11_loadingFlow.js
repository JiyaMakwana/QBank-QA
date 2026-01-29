// Q13 — Loading flow
// Print:
// Loading...
// Data received
// Done

// Rules:
// Loading immediately
// await API
// then print others
async function fakeApi() {
    return new Promise((resolve) => {
        console.log("⌛Loading...");

        setTimeout(() => {
            resolve("Data received");
        },2000)
    });
}

async function load() {
    try {
        let api=await fakeApi();
        console.log(api);
        console.log("Done")
    } catch (err) {
        console.log(err);
    }
}
load();
