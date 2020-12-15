// I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present 
// and if its valid answer

var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
]
function chksecurityQuestions(securityQuestions,question,ans) {
    let val = [];
    for(let i in securityQuestions){
        let questAnsPair = securityQuestions[i];
        for(let values of Object.values(questAnsPair)){
            val.push(values);
        }
    }
    for(let i = 0; i < val.length; i++){
        if(question === val[i] && ans === val[i+1]){
            return true;
        }
    }
    return false;
}

var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);

ques = "What was your first pet’s name?";
ans  =  "DufferNutter";
status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);