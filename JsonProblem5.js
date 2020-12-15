// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

let two_D_Array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
let ans = arrayToObject(two_D_Array);

function arrayToObject(array){
    let obj = Object.fromEntries(array);    
    return obj;
}

console.log(ans);