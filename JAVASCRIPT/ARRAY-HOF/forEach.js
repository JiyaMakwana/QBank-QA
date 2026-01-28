// Using forEach, calculate total sum.
function foreach1(arr)
{
    let sum=0;
    arr.forEach((val) => 
        {
            sum+=val;
        }
    );
    return sum;
}
console.log(foreach1([1,2,3,4]));

// Using forEach, create a new array that stores squares.
function foreach2(arr)
{
    let newArr=[];
    arr.forEach((val) => 
        {
            newArr.push(val*val);
        }
    );
    return newArr;
}
console.log(foreach2([1,2,3,4]));