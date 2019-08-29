const R = require('ramda');



// compose 从右往左执行函数组合（右侧函数的输出作为左侧函数的输入）。最右侧函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
const yellGreeting = R.compose(R.toUpper, classyGreeting);
const composeRes = yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
console.log(composeRes)


// toPairs 将一个对象的属性转换成键、值二元组类型的数组
const toPairs = R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
console.log(toPairs)

// reverse 对列表或字符串的排列顺序取反。
const reverseRes = R.reverse([1, 2, 3]);  //=> [3, 2, 1]
console.log(reverseRes)

//  compose toPairs ->  reverse 
const toUpperFn = R.compose(R.reverse, R.toPairs);
console.log(toUpperFn({a: 3, b: 6, c: 9})) // [ [ 'c', 9 ], [ 'b', 6 ], [ 'a', 3 ] ]

// map  接收一个函数和一个 functor, 将该函数应用到 functor 的每个值上，返回一个具有相同形态的 functor。
const double = x => x * 2;
const doubleRes = R.map(double, [1, 2, 3]); 
console.log(doubleRes) //=> [2, 4, 6]

const mapRes = R.map(R.reverse, [[1, 2, 3], [2, 4, 6]]); 
console.log(mapRes) //=> [ [ 3, 2, 1 ], [ 6, 4, 2 ] ]

const toPairsRes = R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
const toPairsReverseRes = R.reverse(toPairsRes) //=>[ [ 'c', 3 ], [ 'b', 2 ], [ 'a', 1 ] ] 外部反轉
console.log('toPairs -> reverse ',toPairsReverseRes)

const mapPairsRes = R.map(R.reverse, toPairsRes); // [['a', 1], ['b', 2], ['c', 3]] 
// ['a', 1] map reverse [ 1, 'a' ] , ['b', 2] map reverse [ 2, 'b' ] ...
console.log(mapPairsRes)  //=> [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] 內部反轉


const mapReRes = R.map(R.reverse, R.toPairs); // [ 'a', 2 ], [ 'b', 5 ],[ 'c', 8 ] -> [ 'c', 8 ], [ 'b', 5 ], [ 'a', 2 ]
console.log( mapReRes( {a: 2, b: 5, c: 8})) //=>[ [ 'c', 8 ], [ 'b', 5 ], [ 'a', 2 ] ] 外部反轉 



// 物件轉陣列 key value 互換  
const composeMapRes = R.compose(R.map(R.reverse), R.toPairs);
console.log( composeMapRes( {a: 1, b: 4, c: 7})) //=>[ [ 1, 'a' ], [ 4, 'b' ], [ 7, 'c' ] ]