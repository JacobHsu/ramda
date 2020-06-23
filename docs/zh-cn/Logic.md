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

## both

该函数调用两个函数，并对两函数返回值进行与操作。若第一个函数结果为 false-y 值 (false, null, 0 等)，则返回该结果，否则返回第二个函数的结果。注意，both 为短路操作，即如果第一个函数返回 false-y 值，则不会调用第二个函数。

```js
const gt10 = R.gt(R.__, 10)
const lt20 = R.lt(R.__, 20)
const f = R.both(gt10, lt20);
f(15); //=> true
f(30); //=> false
```
