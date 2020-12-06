let cat = 'cat';
let dog = 'dog';

var interVar = cat;

cat = dog;
dog = interVar;

console.log(cat);
console.log(dog);