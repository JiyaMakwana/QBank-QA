// Return squares of only even numbers.map + filter
function chain1(arr)
{
    let newArr=arr.map(num=>num*num)
                    .filter(num=>num%2===0);
    
    return newArr;
}
console.log(chain1([1,2,3,4,5]));

// filter + reduce
// Sum only positive numbers.
function chain2(arr)
{
    let newArr=arr.filter(num=>num>0)
                    .reduce((acc,curr) => acc+=curr, 0);
    
    return newArr;
}
console.log(chain2([-2, 5, 10, -3, 8]));