## node-koa
这是一个简单的koa练手项目，简单的数据库的增删改查
#### 前后端分离开发模式
* 后端负责操纵数据库，给前端暴露接口
* 前端负责调用接口，渲染页面

#### 分析
1. 后端项目运行在：http://127.0.0.1:3000
2. 前端项目运行地址：http://127.0.0.1:4000
3. 注意：前后端分离开发跨域问题
    * 由于jsonp不支持post，使用CORS解决跨域问题
##### jsonp与cors的区别
1. jsonp
 * jsonp是一种非正式的传输协议
 * 利用script标签不受同源策略的影响，可以跨域引入外部资源的特性，让服务端返回可执行的js函数，将要返回的数据作为参数传进函数，以实现跨域加载数据的目的。
 * 本质：借用src发送请求，将资源加载到该页面，资源加载完毕之后，吧该资源当做js代码立即执行。
 2. CORS（Cross-Origin Resource Sharing）
* CORS：就是一种跨域解决方案，它定义了一种跨域访问机制，允许网页从不同的域访问其资源。
* 原理：
    1. 当使用XMLHttpRequest发送请求的时候，如果浏览器发现该请求不符合同源策略，会给请求添加一个请求头origin
    2. 后台进行一系列的处理，如果确认接收请求则在返回的结果中加入一个响应头：Access-Control-Allow-Origin
    3. 浏览器判断该响应头中是否包含Origin的值
    4. 如果包含则会处理响应，前端就可以拿到相应数据。
    简单来说，就是浏览器匹配请求头响应头，符合要求就可以拿到数据，否则无法拿到数据。整个过程都是浏览器自动完成。类似于白名单

#### 数据库设计
| 字段名 | 字段类型 | 字段描述 |
|-------| ------ | ------ |
| id | int | 主键Id |
| name | varchar | 英雄名称 |
| gender | varchar | 性别 |
| ctime | varchar | 创建时间 |
|isdel | tinyint | 是否别删除 |
