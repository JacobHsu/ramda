ramda [add](http://ramda.cn/docs/#add)   

`\code> node add`  
Hello, Alice!

ramda [aperture](http://ramda.cn/docs/#aperture)
ramda [append](http://ramda.cn/docs/#append)  

## Object
`$ code> node object`  
[prop](https://ramdajs.com/docs/#prop) 取出對像中指定屬性的值。如果不存在，則返回undefined。
[props](http://ramda.cn/docs/#props) 返回 prop 的數組：輸入為 keys 數組，輸出為對應的 values 數組。
[assoc](http://ramda.cn/docs/#assoc) 淺複製對象，然後設置或覆蓋對象的指定屬性

[toPairs](https://ramdajs.com/docs/#toPairs): 將對象轉化為數組  

## List
`$ code> node list`  
[head](http://ramda.cn/docs/#head) 求列表或字符串的首個元素  
[last](http://ramda.cn/docs/#last) 返回列表或字符串的最後一個元素  
[init](http://ramda.cn/docs/#init) 返回 list 或 string 刪除最後一個元素後的部分  
[tail](http://ramda.cn/docs/#tail) 刪除列表中的首個元素   
[startsWith](http://ramda.cn/docs/#startsWith) 檢查列表是否以給定的值開頭     

[map](http://ramda.cn/docs/#map) Ramda為`Array`和`Object`提供了合適的`map`實現 

[join](http://ramda.cn/docs/#join) 將列表中所有元素通過 分隔符 串連為一個字符串。
> array to string ['a', 'b', 'c'] => a,b,c  

[reduce](http://ramda.cn/docs/#reduce) 數組成員依次執行指定函數，每一次的運算結果都會進入一個累積變量。 左摺疊操作。

## Function  
[addIndex](http://ramda.cn/docs/#addIndex)  創建新的列表迭代函數  

[compose](https://ramdajs.com/docs/#compose)  

## Relation  
`$ code> node relation`  
[propEq](http://ramda.cn/docs/#propEq) 通過 `R.equals` 函數進行相等性判斷


## type
`$ code> node type`

[type](http://ramda.cn/docs/#type)  返回輸入值的（原生）類型  