// Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
objectValues = printAllValues(obj);

function printAllValues(inputObject){
    let newArray = [];
    for(values of Object.values(obj)){
        newArray.push(values);
    }
    return newArray;
}

console.log(objectValues);

