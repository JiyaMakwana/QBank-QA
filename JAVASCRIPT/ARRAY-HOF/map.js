// Return a new array where every number is multiplied by 2.
function map1(arr)
{
    let newArr=arr.map(val=>val*2);
    return newArr;
}
console.log("multiply:: " + map1([1,2,3,4]));

// Return squares of each number.
function map2(arr)
{
    let newArr=arr.map((n=>n*n));
    return newArr;
}
console.log("square:: " + map2([1,2,3,4]));

// Return an array containing only names.
function map3()
{
    let arr=[{name:"Jiya"}, {name:"Raj"}, {name:"Amit"}];
    let newArr=arr.map((value)=>value.name);
    return newArr;
}
console.log(map3());