# webproject demo

## 项目结构
`
  
    webProject  
        ├─assets // 静态资源目录
        │  ├─css // css文件目录
        │  ├─img // 图片文件目录
        │  └─js  // js文件目录
        ├─config // 配置相关
        │  ├─index.js
        │  └─...
        ├─controller // 业务逻辑相关
        │  ├─account.js
        │  └─...
        ├─db // 数据库相关
        │  ├─dao // 调用数据库接口相关逻辑
        │  │  ├─account.js
        │  │  └─...
        │  ├─model  // 数据库表对应model
        │  │  ├─account.js
        │  │  └─...
        │  └─schema // 数据库表对应的schema
        │     ├─account.js
        │     └─...
        ├─node_modules // 依赖包
        ├─routes
        │   ├─index.js 路由总入口
        │   ├─分割线，下面是业务入口
        │   ├─account.js
        │   └─...
        ├─views 相关html代码
        │   ├─index.html
        │   └─ ...
        └─app.js // 服务启动入口文件
`


## 启动命令
`npm run start`

## 路由示例
### api
`

http://localhost:3001/spyer/api/spy58?url=xxx  

http://localhost:3001/account/api/login  

http://localhost:3001/account/api/register 


`


### page
`

http://localhost:3001/account/page/login  

http://localhost:3001/account/page/register 

`


    