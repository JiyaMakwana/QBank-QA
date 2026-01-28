// Return only even numbers.
function filter1(arr)
{
    let newArr=arr.filter(val=>val%2===0);
    return newArr;
}
console.log(filter1([1,2,3,4,5,6]));

// Remove all negative numbers.
function filter2(arr)
{
    let newArr=arr.filter((val) => {val>=0});
    return newArr;
}
console.log(filter1([-3, 10, -5, 8, 2]));

// Remove all falsy values.
function filter3(arr)
{
    // let newArr=arr.filter((val) => {Boolean});  //will give only falsy values
    // let newArr=arr.filter((val) => {!value});
    let newArr=arr.filter(val=>val);
    return newArr;
}
console.log(filter3([0, "", false, "hello", 25]));