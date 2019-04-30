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