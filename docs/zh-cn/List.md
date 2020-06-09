# List

## adjust

将数组中指定索引处的值替换为经函数变换的值。

[filename](code/list/adjust.js ':include :type=code :fragment=demo')

## all

如果列表中的所有元素都满足 `predicate`，则返回 `true`；否则，返回 `false`。

若第二个参数自身存在 `all` 方法，则调用自身的 `all` 方法。

若在列表位置中给出 transfomer，则用作 transducer。

[filename](code/list/all.js ':include :type=code :fragment=demo')