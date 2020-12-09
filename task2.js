//task 2.1

let result = (a + b < 10)?'Few':'Many';

//task 2.2 
let age;
if (age >= 18 && age <= 90){
console.log("valid age");
}
else {
    console.log("invalid age");
}

//task 2.3
let userName = prompt("Please, enter your first name.");
if (name){ //если значение не пустое, корректное, truthy
alert("Hello, " + userName +", nice to meet you.");

let birthYear = prompt("Please enter your birthday year.");
let currentYear = new Date().getFullYear();
alert((currentYear - birthYear) + " years old.");
}
else {
    console.log("Input is empty.");
}

//task 2.4
let num = prompt("Please, enter a number");

switch(true){
    case num < 60:
        alert("F");
        break;
    case num < 70:
        alert("D");
        break;
    case num < 80:
        alert("C");
        break;
    case num < 90:
        alert("B");
        break;
    case num < 100:
        alert("A");
        break;
    default:
        alert("The number is not in scope.");
}
