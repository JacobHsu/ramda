# R.map

R.map 與 el-select 的應用

```js
<el-select v-model="goodTypeID" name="goodType" clearable placeholder="全部商品">
  <el-option
    v-for="(option, index) in goodTypeOptions"
    :key="option.id"
    :label="option.text"
    :value="index"
  />
</el-select>
```

```js
 const promiseGoodInfo = this.geGoodInfo({
    goodID: 1
 });

 promiseGoodInfo.then(
   (val)=> {
        const selectData = row => ({
          id: row.goodID,
          text: row.name,
          value: row.value,
          data: row
        })
        this.goodTypeOptions = R.map(selectData, val.data) //R.fromPairs(R.map(selectData, val.data))
     }
  );
```

