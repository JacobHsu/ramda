const R = require('ramda');

const diff = function(a, b) { return a - b; };
const diffArrow = (a,b) => a-b
const sortRes = R.sort(diffArrow, [4,2,7,5]); //=> [2, 4, 5, 7]
console.log(sortRes)  


const alice = {
    name: 'alice',
    age: 40
  };
  const bob = {
    name: 'bob',
    age: 30
  };
  const clara = {
    name: 'clara',
    age: 40
  };
  const people = [clara, bob, alice];
  const ageNameSort = R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name'))
  ]);
  let ageNameSortRes = ageNameSort(people); //=> [alice, clara, bob]
  console.log(ageNameSortRes)  

