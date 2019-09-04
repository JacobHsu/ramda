// PS C:\ramda\code> node reject

const R = require('ramda');

const isOdd = (n) => n % 2 === 1;

const isEvenArr = R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
console.log(isEvenArr)

const isEvenObj = R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
console.log(isEvenObj)

// 移除陣列物件空值  
const asset = [{address: 1, coin: 2, amount:0, remark:0 }, {address: 1, coin: 2, amount:3, remark:4 }]
const isAmountEmpty = R.propEq('amount', 0);
const amountUseful =  R.reject(isAmountEmpty, asset); //=> {address: 1, coin: 2, amount:3, remark:4 }
console.log(amountUseful) 