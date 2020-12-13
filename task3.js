//Task 3.1
const post = {
    "title": "some title",
    "body": "some body",
"author": "John Smith",
"views" : 100,
"comment": {      
    "name": "Jack",
    "last name": "Sparrow",
    "commentBody": "All rest we test",
}, 
"isLive": true,
"someFunction": () => {
    console.log("My function works");}
}

//Task 3.1.1
let lengthPost = Object.keys(post).length;
console.log(lengthPost);

for(key in post){
    console.log(key + " "+ post[key]);
}

//Task 3.2.1
let schedule = {};

console.log(isEmpty(schedule)); 

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); 

function isEmpty(obj){
    if(Object.keys(obj).length === 0){
        console.log("Object is empty");
    }
    else{
    for(key in obj){
        
            console.log(key + " " + obj[key]);
        }
    }
}

//Task 3.2.2
function maxNumber (num1, num2){
    let max = num1 > num2 ? num1 : num2;
    return console.log(max);
}

maxNumber(1, 3);
maxNumber(90000, -1);

//Task 3.3
let salaries = {Mykola: 250, Pavlo: 250, Petro: 500}
let sum = 0;
if (Object.keys(salaries).length === 0){
    console.log(0);
}
else{
for(key in salaries){
    sum += salaries[key];
    }
    console.log(sum);
}

//Task 3.3.1
let salariesForMax = {Mykola: 250, Pavlo: 250, Petro: 500}
let max = 0;
let maxSalaryOwner = {};
if (Object.keys(salariesForMax).length === 0){
    console.log(0);
}
else{
for(key in salariesForMax){
    if(max < salariesForMax[key] ){
    max = salariesForMax[key];
    maxSalaryOwner = {key, max};
    }
   }
    console.log(maxSalaryOwner);
}


//Task 3.4
let menu = { width: 200, height: 300, title: "My menu" };
multiplyNumeric(menu);

function multiplyNumeric(obj){
    if (Object.keys(obj).length === 0){
        console.log("Menu is empty.");
    }
    else{
        for(key in obj){
            if(typeof(obj[key]) === "number"){
                obj[key] = obj[key] * 2;
            }
        }
        console.log(obj);
    }
} 

//Task 3.5
showStars(5);

function showStars(rows) {
if(rows < 0 || typeof(rows) != "number"){
    console.log("Please, enter correct number.");
}
else{

     for (let row = 1; row < rows; rows++ ){ 
         let star = "*"; 
         console.log(star);
         star++;
        } 
    }
}

