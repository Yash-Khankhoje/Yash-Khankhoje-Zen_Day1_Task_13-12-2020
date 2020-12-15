// Creating a request
var request = new XMLHttpRequest();

//Opening a connection
request.open('Get','https://restcountries.eu/rest/v2/all',true);

//Sending the request
request.send();

//Loading the response
request.onload = function(){
    var data = JSON.parse(this.response)
    // console.log(data);
    for(let i in data){
        let subObject = data[i];
        let temparr = [];
        for(let values of Object.values(subObject)){
            temparr.push(values);
        }
    console.log(temparr[0]);
    }
}
