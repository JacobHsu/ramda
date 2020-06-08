# Function

## addIndex

通过向列表迭代函数的回调函数添加两个新的参数：当前索引、整个列表，创建新的列表迭代函数。

```js
const mapIndexed = R.addIndex(R.map);
mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
//=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
```
