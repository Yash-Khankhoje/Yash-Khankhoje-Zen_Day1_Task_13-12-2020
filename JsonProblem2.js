// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj = {name : "RajiniKanth", age : 25, hasPets : true};

objectKeys = printAllValues(obj);

function printAllValues(inputObject){
    let newArray = [];
    for(keys of Object.keys(obj)){
        newArray.push(keys);
    }
    return newArray;
}

console.log(objectKeys);
