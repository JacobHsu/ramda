const R = require('ramda');

const isEven = n => n % 2 === 0;

const isEvenArr = R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
console.log(isEvenArr)

const isEvenObj = R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
console.log(isEvenObj)