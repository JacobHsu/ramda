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
