const R = require('ramda');

let headArr = R.head(['fi', 'fo', 'fum']); //=> 'fi'
let head1EmptyArr = R.head([]); //=> undefined

let headStr = R.head('abc'); //=> 'a'
let headStrNull = R.head(''); //=> ''
console.log(headArr, head1EmptyArr, headStr, headStrNull)

let lastArr =  R.last(['fi', 'fo', 'fum']); //=> 'fum'
let lastEmptyArr = R.last([]); //=> undefined

let lastStr = R.last('abc'); //=> 'c'
let lastStrNull = R.last(''); //=> ''
console.log(lastArr, lastEmptyArr, lastStr, lastStrNull)

let initArr = R.init([1, 2, 3]);  //=> [1, 2]
let initArr1 = R.init([1]);        //=> []

let initStr = R.init('abc');  //=> 'ab'
let initStr1 = R.init('a');    //=> ''
console.log(initArr, initArr1, initStr, initStr1)

let tailArr = R.tail([1, 2, 3]);  //=> [2, 3]
let tailArr1 = R.tail([1]);        //=> []

let tailStr = R.tail('abc');  //=> 'bc'
let tailStr1 = R.tail('a');    //=> ''
console.log(tailArr, tailArr1, tailStr, tailStr1)

console.log( R.join(',', ['a', 'b', 'c']) );    //=> '1|2|3

var mySubtract = function (a, b) {
    return a - b;
  };
let reduceAns = R.reduce(mySubtract, 0)([1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
console.log('R.reduce:',reduceAns);