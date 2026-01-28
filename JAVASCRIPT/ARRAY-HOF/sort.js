// Sort numbers in ascending order.
function sort1(arr)
{
    let newArr=arr.sort((a,b) => a-b);
    return newArr;
}
console.log(sort1([9, 2, 7, 1]));

// Sort numbers in descending order.
function sort2(arr)
{
    let newArr=arr.sort((a,b) => b-a);
    return newArr;
}
console.log(sort2([9, 2, 7, 1]));

// Sort products by price low → high.
function sort3(arr)
{
    let newArr=arr.sort((a,b) => a.price-b.price);
    return newArr;
}
console.log(sort3([{price:500},{price:200},{price:800}]));