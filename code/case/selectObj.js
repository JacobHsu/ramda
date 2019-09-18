const R = require('ramda');

// {a: 1, b: 2, c: 3} -> [ { name: 'a', value: 1 },{ name: 'b', value: 2 },{ name: 'c', value: 3 } ]
const obj = {a: 1, b: 2, c: 3};
const objArr = R.toPairs(obj); //=> [['a', 1], ['b', 2], ['c', 3]]

const rowMap = row => ({name:row[0],value:row[1]}); // {console.log(v[0],v[1])};
console.log( R.map(rowMap, objArr) ) //[ { name: 'a', value: 1 },{ name: 'b', value: 2 },{ name: 'c', value: 3 } ]
