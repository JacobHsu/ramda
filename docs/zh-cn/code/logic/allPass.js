const R = require('ramda');

/// [demo]
const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
/// [demo]

const res = isQueenOfSpades({rank: 'Q', suit: '♠︎'}); 
console.log(res)