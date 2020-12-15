let obj = {
    "name" : "Carolina",
    "country" : "Spain",
    "age" : 26,
    "rank": 1
};

for(var i in obj){
    let key = i;
    let val = obj[i];
    console.log(key," -> ",val);
}