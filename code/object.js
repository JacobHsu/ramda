const R = require('ramda');

let propX= R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
console.log(propX)  //=>100

let dataSelector = R.prop('data')
console.log( dataSelector ) //=> [Function: f1]
console.log( dataSelector({data: 99}) ) //=>99