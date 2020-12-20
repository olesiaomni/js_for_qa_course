// Exercise 1
// Write a function which should return sum of all numbers inside array
const numbersArr = [1, -1, 2, 3];


function sum(numbersArr) {
    let sumOfNumbers = 0;
 for(let i = 0; i < numbersArr.length; i++){
    sumOfNumbers += numbersArr[i];
 } 
 return sumOfNumbers;// numbers
}

console.log(sum(numbersArr)); // 5

// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    
    let arrMinMax = [];
    for (let i = min; i < max + 1; i++){
        arrMinMax[i] = min;
        min++;
    }
    return arrMinMax;
    // your code
}

const numbersArrNum = arrayFromRange(1, 4);

console.log(numbersArrNum); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]


// Exercise 3
// Need to create function which display the max number from the array
const numbersNum = [1, 2, 3, 4, 5];

const maxNumber = getMax(numbersNum);

console.log(maxNumber) // should display max number from the array 5

function getMax(arr) {
    let maxN = 0;
   for (let num of arr){
       if (typeof num === "number" && num >= maxN){
           maxN = num;
       }
    }
          return maxN;
    // your code
}


// Exercise 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]

let bestMovie = movies.filter(movie => {
    if(movie.year === 2019 && movie.rating > 4){
        return movie;
    }
});

bestMovie.sort((a, b) => b.rating - a.rating);
let bestMovieTitle = bestMovie.map(item => {
    return item.title;
});
console.log(bestMovieTitle);
// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 