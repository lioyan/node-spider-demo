# 一个简单的node爬虫
> 采用广度优先算法，这是一个node爬虫，需要用到这么几个库：  
* sync-request请求库  
虽然request和nodegrass都是很优秀的库，但这个是个同步的request请求库，比较好好理解  
* cheerio  
大名鼎鼎的cheerio用来处理dom  

## 首先新建目录  
``
mkdir spider
``
## 初始化
``
mpn init
``
## 安装依赖库
``
npm install sync-request cheerio --save-dev
``
