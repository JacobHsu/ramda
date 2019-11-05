const R = require('ramda');
const personnel = [
    'Dave Brubeck',
    'Paul Desmond',
    'Eugene Wright',
    'Joe Morello',
    'Gerry Mulligan',
    'Bob Bates',
    'Joe Dodge',
    'Ron Crotty'
  ];
  
const takeFive = R.take(5);
const takeRes = takeFive(personnel);
//console.log(takeRes)
//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']

const dropRes =  R.drop(2, takeRes); 
//console.log(dropRes)

const dropTwo =  R.drop(2); 
const dropResult = dropTwo(personnel);
//console.log(dropResult)


const page = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight'
  ];

const pageFilter = R.compose(R.take(3), R.drop(2));
console.log( pageFilter(page) ) 
// [ 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight' ]  R.drop(2)  
// [ 'Three', 'Four', 'Five' ] R.take(3) 