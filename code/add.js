const R = require('ramda');
const greet = R.replace('{name}', R.__, 'Hello, {name}!');
greet('Alice'); //=> 'Hello, Alice!'
console.log( greet('Alice') ); 


console.log( R.adjust(2, R.toUpper, ['a', 'b', 'c', 'd']) ); //=>[ 'a', 'b', 'C', 'd' ]
console.log( R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']) ); //=>[ 'a', 'b', 'c', 'D' ]  

const equals3 = R.equals(3);
let equalA = R.all(equals3)([3, 3, 3, 3]); //=> true
let equalB = R.all(equals3)([3, 3, 1, 3]); //=> false
console.log(equalA, equalB);


const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

let propEqA = isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
let propEqB = isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
console.log('allPass:', propEqA, propEqB);


const isClub = R.propEq('suit', '♣');

const isBlackCard = R.anyPass([isClub, isSpade]);

let propEqD = isBlackCard({rank: '10', suit: '♣'}); //=> true
let propEqE = isBlackCard({rank: 'Q', suit: '♠'}); //=> true
let propEqF = isBlackCard({rank: 'Q', suit: '♦'}); //=> false
console.log('anyPass:', propEqD, propEqE, propEqF);

const t = R.always('Tee');
console.log( t() ); //=> 'Tee'


let apertureA  = R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
let apertureB  = R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
let apertureC  = R.aperture(7, [1, 2, 3, 4, 5]); //=> []
console.log( 'aperture:', apertureA, apertureB, apertureC );

let appendA = R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
let appendB = R.append('tests', []); //=> ['tests']
let appendC = R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
console.log( 'append:', appendA, appendB, appendC );


const nums = [1, 2, 3, -99, 42, 6, 7];
let applyA = R.apply(Math.max, nums); //=> 42
console.log( 'apply:',applyA);