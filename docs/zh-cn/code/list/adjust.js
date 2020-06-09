const R = require('ramda');

/// [demo]
R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'B', 'c', 'd']
R.adjust(2, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'C', 'd']
R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);    //=> ['a', 'b', 'c', 'D']
/// [demo]

const res = R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);
console.log(res)