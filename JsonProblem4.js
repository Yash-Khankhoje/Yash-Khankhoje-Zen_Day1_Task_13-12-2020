// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.

var array = ["GUVI", "I", "am", "Geek"];
object = transformFirstAndLast(array);

function transformFirstAndLast(inputArray){
    let key = inputArray[0];
    let obj={
        [key]: inputArray[inputArray.length - 1]
    }
    return obj;
}

console.log(object);

