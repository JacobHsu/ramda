const R = require('ramda');

/// [demo]
const lessThan0 = R.flip(R.lt)(0); // [Function]
const lessThan2 = R.flip(R.lt)(2); // [Function]
lessThan2(1) //true 1<2
R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true
/// [demo]

// R.lt  ? 首个参数小于第二个参数
// R.flip 交换函数前两个参数的位置。
//console.log( R.lt(2, 1) ); // false
//console.log( R.lt(2)(1) ); // false 
//console.log( R.lt(2)(3) ); // true 
//console.log( R.lt(2) ); // [Function: f1]

//const mergeThree = (a, b, c) => [].concat(a, b, c);
//mergeThree(1, 2, 3); //=> [1, 2, 3]
//R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]

console.log(lessThan2(1)) // true 1<2
console.log(lessThan2(2)) // false 2<3

const res = R.any(lessThan2)([1, 2]);
console.log(res)