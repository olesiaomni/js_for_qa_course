const post = {
    "title": "title 1",
    "body": "body",
"author": "best author",
"views" : 100,
"comment": {      //объект внутри объекта
    "name": "Jack",
    "last name": "Sparrow",
    "commentBody": "All rest we test",
    subcomment: {
        subsub: {
        ololo: "smth",
        },
    },
}, 
"isLive": true,
"someFunction": () => {
    console.log("My function works");}

}

console.log(post.comment.commentBody); //dot notation
console.log(post["comment"]["commentBody]"]); //braket notation
console.log(post.someFunction());
console.log(post["someFunction"]());


function helloColleagues(company, role){
    company = "Avenga";
    role = "AQA";
    return console.log("I am working in " + company +" in super " + role + " role");
    //`I am working in ${company}  in super ${role} role`

}

let helloColleags = (company, role) => {
    if (company && role){
    return `I am working in ${company}  in super ${role} role.`;
}else {
    return "Wrong value."
}

}
console.log(helloColleagues("Avenga", "AQA"));
console.log(helloCOleags("ine", "two"));