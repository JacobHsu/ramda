const R = require('ramda');

// compose 前後順序沒差　　
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName;
const yellGreeting = R.compose(R.toUpper, classyGreeting);
let upperStr = yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
const sayGreeting = R.compose(classyGreeting, R.toUpper);
let upperAgainStr = yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"

console.log(upperStr)
console.log(upperAgainStr)

let objToArr = R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
console.log(objToArr)


const objFn = R.map( x => {
        return {'id': 1, 'val': x}
    }
) 
console.log(  objFn({x:10}) ) //=> { x: { id: 1, val: 10 } }
let objToArr2 = R.toPairs( objFn({x:10}) );
console.log(  objToArr2 ) //=> [ [ 'x', { id: 1, val: 10 } ] ]

R.prop('x', {x: 100}); //=> 100
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4



