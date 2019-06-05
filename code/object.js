const R = require('ramda');

let propX= R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
console.log(propX)  //=>100

let dataSelector = R.prop('data')
console.log( dataSelector ) //=> [Function: f1]
console.log( dataSelector({data: 99}) ) //=>99

console.log ('R.props:',  R.props(['first', 'last']) )

const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
let name = fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
console.log(name)

const reduceSelected = R.compose(R.reduce(R.or, ''), R.props(['first', 'last']));
let selected = reduceSelected({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony'
console.log(selected)