# List

## adjust

将数组中指定索引处的值替换为经函数变换的值。

[filename](code/list/adjust.js ':include :type=code :fragment=demo')

## all

如果列表中的所有元素都满足 `predicate`，则返回 `true`；否则，返回 `false`。

若第二个参数自身存在 `all` 方法，则调用自身的 `all` 方法。

若在列表位置中给出 transfomer，则用作 transducer。

[filename](code/list/all.js ':include :type=code :fragment=demo')

## any

只要列表中有一个元素满足 predicate，就返回 true，否则返回 false。

若第二个参数自身存在 any 方法，则调用其自身的 any。

若在列表位置中给出 transfomer，则用作 transducer 。

[filename](code/list/any.js ':include :type=code :fragment=demo')

## aperture

返回一个新列表，列表中的元素为由原列表相邻元素组成的 n 元组。如果 `n` 大于列表的长度，则返回空列表。

若在列表位置中给出 transfomer，则用作 transducer。

```js
R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
R.aperture(7, [1, 2, 3, 4, 5]); //=> []
```

## append

在列表末尾拼接一个元素。

```js
R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
```

## chain

chain 将函数映射到列表中每个元素，并将结果连接起来。 chain 在一些库中也称为 flatMap（先 map 再 flatten ）。

若第二个参数存在 chain 方法，则调用其自身的 chain方法。该参数需符合 FantasyLand Chain 规范。

如果第二个参数是函数，`chain(f, g)(x)` 等价于 `f(g(x), x)`。

```js
const duplicate = n => [n, n];
R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]

R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
//=>  R.append( R.head([1, 2, 3]), [1, 2, 3] )
//=>  R.append( 1, [1, 2, 3] ) => [1, 2, 3, 1]
```
