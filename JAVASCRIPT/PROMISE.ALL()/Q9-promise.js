
function a() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("A");
        },1000);
    });
}
function b() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("B");
        },2000);
    });
}

function c() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("C")
        },3000);
    });
}

async function load() {
    try {
        console.time("time taken");
        let [p1,p2,p3]=await Promise.all([a(),b(),c()]);
        console.log(p1,p2,p3);
        console.timeEnd("time taken");
    } catch (err) {
        console.log(err);
    }
}
load();