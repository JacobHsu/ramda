# ramda

[Ramda 中文](http://ramda.cn/)  
[Ramda 函数库参考教程](http://www.ruanyifeng.com/blog/2017/03/ramda.html)  
> 你可能會問，Underscore 和 Lodash 已經這麼流行了，為什麼還要學習好像雷同的 Ramda 呢？  
回答是，前兩者的參數位置不對，把處理的數據放到了第一個參數。  
Ramda 的數據一律放在最後一個參數，理念是"function first，data last"。  

## docsify

[docsify.js](https://docsify.js.org/#/zh-cn/quickstart)

`$ docsify init ./docs`  
`$ docsify serve docs`  

# hexo 

[hexo-theme-doc](https://github.com/zalando-incubator/hexo-theme-doc)  
git clone  新開blog資料夾 將code 複製過去  

_config.yaml
```js
# Site
title: Hello Ramda

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
root: /ramda

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
    type: git
    repository: https://github.com/JacobHsu/ramda
    branch: gh-pages
```

`$blog> npm install`

remove `to-html.md` `ui.md` content  

`$doc> hexo g`
`$doc> hexo d`
> `hexo d` ERROR： `ERROR Deployer not found: git`  
`npm install hexo-deployer-git --save`  

https://jacobhsu.github.io/ramda 

`$doc> hexo s`  
http://localhost:4000/ramda/   


doc\source\_data \navigation.yaml
```js
  "logo": {
    "text": "Hello Ramda",
    "type": "link",
    "path": "index.html"
  },
```