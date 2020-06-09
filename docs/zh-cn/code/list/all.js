const R = require('ramda');

/// [demo]
const equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false
/// [demo]

const res = R.all(equals3)([3, 3, 1, 3]);
console.log(res)