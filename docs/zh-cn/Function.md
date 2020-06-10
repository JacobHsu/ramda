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
