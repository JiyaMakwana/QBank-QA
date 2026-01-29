async function getName() {
    return "Jiya";
}
async function getAge() {
    return 21;
}
async function getCity() {
    return "Mumbai";
}

async function load() {
    let [name,age,city]=await Promise.all([getName(), getAge(), getCity()]);
    // let age=await getAge();
    // let city=await getCity();

    // let obj={"name":name, "age":age, "city":city};
    let obj={name,age,city};
    console.log(obj);
}
load();