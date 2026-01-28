// Return the first number greater than 10.
function find1(arr)
{
    let value=arr.find((val) => {return val>10});
    return value;
}
console.log(find1([5, 8, 12, 20]));

// Return the object whose id is 2.
function find2(arr)
{
    let value=arr.find(obj => obj.id===2);
    return value;
}
console.log(find2([{id:1}, {id:2}, {id:3}]));