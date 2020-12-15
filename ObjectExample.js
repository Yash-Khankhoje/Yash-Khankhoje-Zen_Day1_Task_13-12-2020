let objectList = [{name:"Yash", age:"23"},{name:"Devika", age:"21"},{name:"Anushka", age:"20"}];
for(let i in objectList){
    let subObject = objectList[i];
    let valArray = [];
    let keyArray = [];
    for(let values of Object.values(subObject)){
        valArray.push(values);
    }

    for(let keys of Object.keys(subObject)){
        keyArray.push(keys);
    }
    console.log(keyArray[0]," = ",valArray[0]);
    
}