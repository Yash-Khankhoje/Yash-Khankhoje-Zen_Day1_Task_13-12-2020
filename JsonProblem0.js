var cat = 
    {
        name: "Fluffy",
        activities: ["play", "eat cat food"],
        catFriends: [
            {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
            }, 
            {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
            }
        ]
   }

// 1. Add height and weight to Fluffy.

cat.height = 2;
cat.weight = 7;

// 2. Fluffy name is spelled wrongly. Update it to Fluffyy.

cat.name = "Fluffy";

// 3. List all the activities of Fluffyy’s catFriends.

let catFriendsObj = cat.catFriends;
for(i in catFriendsObj){
    let friendsData = catFriendsObj[i];
    let objectData = [];
    for(let values of Object.values(friendsData)){
        objectData.push(values);
    }
    console.log("activities = ", objectData[1]);
}

// 4. Print the catFriends names.

for(i in catFriendsObj){
    let friendsData = catFriendsObj[i];
    let objectData = [];
    for(let values of Object.values(friendsData)){
        objectData.push(values);
    }
    console.log("friendsName = ", objectData[0]);
}

// 5. Print the total weight of catFriends.

totalWeight = parseInt(0);
for(i in catFriendsObj){
    let friendsData = catFriendsObj[i];
    let objectData = [];
    for(let values of Object.values(friendsData)){
        objectData.push(values);
    }
    totalWeight = totalWeight + objectData[2];
}
console.log("totalWeight = ", totalWeight);

// 6. Print the total activities of all cats (op:6).

let totalActivities = parseInt(0);
for(i in catFriendsObj){
    let friendsData = catFriendsObj[i];
    let objectData = [];
    for(let values of Object.values(friendsData)){
        objectData.push(values);
    }
    totalActivities = totalActivities + objectData[1].length;
}
console.log("totalActivities = ", totalActivities);

// 7. Add 2 more activities to bar & foo cats.

for(i in catFriendsObj){
    let friendsData = catFriendsObj[i];
    let objectData = [];
    for(let values of Object.values(friendsData)){
        objectData.push(values);
    }
    friendsData.activities.push("Drinking");
    friendsData.activities.push("Thinking");
    console.log("new activities = ", friendsData.activities);
}

// 8. Update the fur color of bar.

for(i in catFriendsObj){
    let friendsData = catFriendsObj[i];
    let objectData = [];
    for(let values of Object.values(friendsData)){
        objectData.push(values);
    }
    if(friendsData.name == "bar"){
        friendsData.furcolor = "red";
    }
}

console.log(cat);