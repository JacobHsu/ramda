# Function

## addIndex

通过向列表迭代函数的回调函数添加两个新的参数：当前索引、整个列表，创建新的列表迭代函数。

```js
const mapIndexed = R.addIndex(R.map);
mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
//=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
```

## always

返回一个返回恒定值的函数。注意，对于非原始值，返回的值是对原始值的引用。

```js
const t = R.always('Tee');
t(); //=> 'Tee'
```

## ap

ap 将函数列表作用于值列表上。

若第二个参数自身存在 `ap` 方法，则调用自身的 `ap` 方法。柯里化函数也可以作为 applicative。

```js
R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]

// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
```

## apply

将函数 `fn` 作用于参数列表 `args`。`apply` 可以将变参函数转换为为定参函数。如果上下文很重要，则 fn 应该绑定其上下文。

```js
const nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max, nums); //=> 42
```

## applySpec

接受一个属性值为函数的对象，返回一个能生成相同结构对象的函数。返回的函数使用传入的参数调用对象的每个属性位对应的函数，来生成相应属性的值。

[filename](code/function/applySpec.js ':include :type=code :fragment=demo')

## applyTo

接受一个值，并将一个函数作用于其上。
该函数又被称为 `thrush` combinator.

```js
const t42 = R.applyTo(42);
t42(R.identity); //=> 42
t42(R.add(1)); //=> 43
```

## ascend

由返回值可与 < 和 > 比较的函数，创建一个升序比较函数。

```js
const byAge = R.ascend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByYoungestFirst = R.sort(byAge, people);
  //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
```

## descend

由返回值可与 < 和 > 比较的函数，创建一个降序比较函数。

```js
const byAge = R.descend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByOldestFirst = R.sort(byAge, people);
  //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
```

## binary

将任意元函数封装为二元函数（只接受2个参数）中。任何额外的参数都不会传递给被封装的函数。

```js
const takesThreeArgs = function(a, b, c) {
  return [a, b, c];
};
takesThreeArgs.length; //=> 3
takesThreeArgs(1, 2, 3); //=> [1, 2, 3]

const takesTwoArgs = R.binary(takesThreeArgs);
takesTwoArgs.length; //=> 2
// Only 2 arguments are passed to the wrapped function
takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
```
