const R = require('ramda');

const res = R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
const res2 = R.ap([R.concat('1'), R.toUpper])('Ram') // => [ '1R', '1a', '1m', 'R', 'A', 'M' ]
console.log(res, res2)