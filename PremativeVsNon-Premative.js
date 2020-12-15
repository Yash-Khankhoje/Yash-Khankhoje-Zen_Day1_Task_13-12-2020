//Copy by reference for non-primitive data.

let array1 = [9,1,5,8,1,5,1,0,9,0];
let array2 = array1;

console.log("array1 = ", array1);
console.log("array2 = ", array2);

console.log("Now we are making changes in array2 and we will observe both the arrays.:")

array2[5] = 3;

console.log("array1 = ", array1);
console.log("array2 = ", array2);
