# Logic

## allPass

传入包含多个 predicate 的列表，返回一个 predicate：  
如果给定的参数满足列表中的所有 predicate ，则返回 true。

该函数返回一个柯里化的函数，参数个数由列表中参数最多的 predicate 决定。

[filename](code/logic/allPass.js ':include :type=code :fragment=demo')

## anyPass

传入包含多个 predicate 的列表，返回一个 predicate：只要给定的参数满足列表中的一个 predicate ，就返回 true。

该函数返回一个柯里化的函数，参数个数由列表中参数最多的 predicate 决定。

[filename](code/logic/anyPass.js ':include :type=code :fragment=demo')

## and

如果两个参数都是 `true`，则返回 `true`；否则返回 `false`。

```js
R.and(true, true); //=> true
R.and(true, false); //=> false
R.and(false, true); //=> false
R.and(false, false); //=> false
```
