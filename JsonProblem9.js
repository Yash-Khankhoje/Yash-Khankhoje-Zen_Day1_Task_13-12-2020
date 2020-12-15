// Write a function to return the list of characters below 20 age.

var students = [
    {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
    
function returnMinors(arr){
    let val  = [];
    for(let i = 0; i < arr.length; i++){
        subObject = arr[i];
        for(values of Object.values(subObject)){
            val.push(values);
        }
    }
    let names = [];
    let ages = [];
    for(i = 0; i < val.length; i++){
        names.push(val[i]);
        i++;
    }
    for(i = 1; i < val.length; i++){
        ages.push(val[i]);
        i++;
    }
    let underAge = [];
    for(let i = 0; i <  ages.length; i++){
        if(parseInt(ages[i]) < parseInt(20)){
            underAge.push(names[i]);
        }
    }
    return underAge;
}
   
console.log(returnMinors(students));