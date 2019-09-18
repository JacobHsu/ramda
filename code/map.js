const R = require('ramda');

const double = x => x * 2;
let map1 = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
let map2 = R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
console.log(map1 , map2);

let input = [
    {name:'jacob', key:'21', password:'1234'},
    {name:'jason', key:'22', password:'5678'}
]

const pwd = v => R.assoc('password','****', v) 
let ret = R.map(pwd, input)
console.log(ret)
// [ { name: 'jacob', key: '21', password: '****' },
//  { name: 'jason', key: '22', password: '****' } ]

const propKey = R.prop('key')
let propRet = R.map( propKey, input)
let prefix = R.map( (v)=>('A'+v),propRet)
console.log(propRet) // [ '21', '22' ]
console.log(prefix)  // [ 'A21', 'A22' ]


const xyz = { x: 1, y: 2, z: 3 };
const prependKeyAndDouble = (num, key, obj) => key + (num * 2);

const mapObjIndexedRes= R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
console.log(mapObjIndexedRes)
