# Object

## assoc

浅复制对象，然后设置或覆盖对象的指定属性。

注意，该函数也会将 prototype 属性复制到新的对象中。所有 non-primitive 属性都通过引用复制。

`R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}`

## assocPath

浅复制对象，设置或覆盖即将创建的给定路径所需的节点，并将特定值放在该路径的末端。

注意，这也会将 prototype 属性复制到新对象上。所有 non-primitive 属性都通过引用复制。

```js
R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}

// Any missing or non-object keys in path will be overridden
R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
```
