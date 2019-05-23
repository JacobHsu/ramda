const R = require('ramda');

console.log(R.type({}) ); //=> "Object"
console.log( R.type(1) ); //=> "Number"

