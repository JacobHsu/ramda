const R = require('ramda');


const mapIndexed = R.addIndex(R.map);
let id_val = mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
//=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
console.log(id_val);

let arr = ['f', 'o', 'o'];
let opts = mapIndexed( (val, idx) => ({
    id: idx,
    value: val
}), arr)
console.log(opts)  //=>[ { id: 0, value: 'f' },{ id: 1, value: 'o' },{ id: 2, value: 'o' }]


