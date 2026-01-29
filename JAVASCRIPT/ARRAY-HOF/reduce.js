// Find sum of all numbers.
function reduce1(arr)
{
    let newVal=arr.reduce((acc,curr) => {return acc+=curr},0);
    return newVal;
}
console.log(reduce1([1,2,3,4])); 

// Find largest number.
function reduce2(arr)
{
    // let newVal=arr.reduce((acc,curr) => { return acc > curr ? acc:curr},0);
    let newVal=arr.reduce((acc,curr) => { return Math.max(acc,curr)},0);    //🔥

    return newVal;
}
console.log(reduce2([10, 45, 22, 90, 5])); 

// Count how many times each fruit appears.
// ["apple","banana","apple","orange","banana","apple"]
// output= { apple:3, banana:2, orange:1 }

function reduce3(arr)
{
    let newVal=arr.reduce((accFruit,currFruit) => {
        if(accFruit[currFruit])
        {
            accFruit[currFruit]++;  //if fruit already exist
        }
        else{
            accFruit[currFruit]=1;
        }
        return accFruit;
    },{});

    return newVal;
}
console.log(reduce3(["apple","banana","apple","orange","banana","apple"])); 

// Flatten this array.
// [[1,2],[3,4],[5]]
// output= [1,2,3,4,5]

function reduce4(arr)
{
    let flatArr=arr.reduce((accBook,curr) => { return accBook.concat(curr)},[]);
    return flatArr;
}
console.log(reduce4([[1,2],[3,4],[5]]));

// Remove duplicates.
function reduce5(arr)
{
    let newVal=arr.reduce((accBook,currValue) => {
        if(!accBook.includes(currValue))
        {
            accBook.push(currValue);  //if fruit already exist
        }
       
        return accBook;
    },[]);

    return newVal;
}
console.log(reduce5([1,2,2,3,3,4]));

// Calculate total cart value.
// [
//   {price:100, qty:2},    => 100x2=200
//   {price:50, qty:3}      => 50x3=150
// ] 200+150= 350

// output = 350
function reduce6(arr)
{
    let totalPrice=arr.reduce((accBook, currValue) => {
        return accBook + (currValue.price*currValue.qty);
    },0);

    return  totalPrice;
}
console.log(reduce6([
  {price:100, qty:2},
  {price:50, qty:3}
]
));

// Convert this array into an object using id as key.
// [{id:1,name:"A"}, {id:2,name:"B"}]
// output= {
//   1:{id:1,name:"A"},
//   2:{id:2,name:"B"}
// }
function reduce7(arr)
{
    // let obj=arr.reduce((accBook, currValue) => {
    //     accBook[currValue.id]=currValue;
    //     return accBook;
    // },{});

    //simple pro version
    let obj=arr.reduce((acc,curr)=> { return acc[curr.id]=curr,acc} ,{});
    return obj;
}
console.log(reduce7([{id:1,name:"A"}, {id:2,name:"B"}]));

// reduce
// Find most frequent number.
// [1,1,2,3,1,2,4]
// output => 1
function reduce8(arr)
{
    let frequent=arr.reduce((accCount,currValue) => {
        if(accCount.includes(currValue))
        {
            accCount++;
        }

    } ,0);
    return accCount;
}
// console.log(reduce8([1,1,2,3,1,2,4]));

// Using reduce, calculate the average.
function reduce9(arr){
    let sum=arr.reduce((accBook,currValue)=>{ 
        return accBook+currValue;
    },0);
    
    return sum/arr.length;
}
console.log(reduce9([2, 4, 6, 8]));

// Using reduce, return a new array containing numbers greater than 4.
//initial=[]
function reduce10(arr)
{
    let newArr=arr.reduce((acc,currVal)=> {
        if( currVal >=4) acc.push(currVal);
        return acc;
    },[]);
    return newArr;
}
console.log(reduce10([1, 3, 5, 7, 9]));

// 