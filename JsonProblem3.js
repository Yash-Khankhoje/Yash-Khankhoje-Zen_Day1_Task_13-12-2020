// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.

var object = {name: "ISRO", age: 35, role: "Scientist"};

ans= convertObjectToList(object);

function convertObjectToList(obj){
    let keysArray = [];
    for(keys of Object.keys(obj)){
        keysArray.push(keys);
    }

    let valuesArray = [];
    for(values of Object.values(obj)){
        valuesArray.push(values);
    }

    convertedArray = [];
    for(let i = 0; i < keysArray.length; i++){
        convertedArray.push([keysArray[i]+", "+valuesArray[i]]);
    }
    return convertedArray;
}

console.log(ans);