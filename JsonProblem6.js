// Write a function called "transformGeekData" that transforms some set of data from one format to another.

var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
let ans = arrayToObject(array);

function arrayToObject(array){
    let obj = {};
    let objList = [];
    for(let i = 0; i < array.length; i++){
        obj = Object.fromEntries(array[i]);   
        objList.push(obj); 
    }
    return objList;
}
console.log(ans);