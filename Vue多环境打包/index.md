### 前端打包
- npm run build 
- package.json -->  ue-cli-service build
- 发布到线上的代码，不便于调试


- 打包发布到测试环境
- 增加打包命令 开发（后端地址）、测试（后端地址）、线上（后端地址）
- npm run build:dev   -- 开发调试环境
- npm run build:prod  -- 线上环境


### 打包的代码如何运行
- 不能双击dist/index.html
- 放到http容器运行 serve  tomcat  nginx  iis
- 使用serve：npm i -g serve
- 启动打包后的目录： serve dist  访问：http://localhost:5000


### 打包指定不同的环境变量（开发、测试、线上）
- npm run build:prod 和 npm run build 的区别是不是有没有压缩的区别？
- 添加环境变量
   开发：在根目录添加 .env.dev  dev名称与package.json中的mode对应
   线上：在根目录添加 .env.prod 
   <!-- 文件内容，键值对存在
   NODE_ENV=development  开发环境
   VUE_APP_URL=http:212.90.88:8080   变量名以VUE_APP开头
   -->
- 使用环境变量：process.env.NODE_ENV
   其中process是node的东西，原生js不能使用，打包后会被解析

### 打包手动配置文件
- vuecli4.x脚手架基于webpack
- vuecli零配置，自定义配置的时候可以指定vue.config.js(项目根目录)
- 指定子域配置  publicPath


### 打包压缩，大文件处理
- 开发 npm run build:dev   打包文件太大
- 线上 npm run build:prod  打包文件变小，其中.map文件为映射，方便调试
                            productionSourceMap: false就没有.map文件了
- 上边两个环境少了哪些文件？ 注释，空行，压缩，混淆

- 特殊大文件 900k       
- 代码细分：三方vue，axios，elementUI 开发代码
- 把三方得代码移出去，使用三方cdn资源（免费、收费）
- 找三方包cdn资源，添加到public/index.html, 把代码中得from vue, vue.use()去掉
  import Vue from 'vue'
  Vue.use(ElementUI)
- 需要在vue.config.js中配置排除三方包（再打包发现并没有变小）
- 通过减少三方包vue... 打包后的js变小

### gzip进一步压缩
- compression-webpack-plugin
  安装插件：cnpm i -D compression-webpack-plugin
- webpack中配置这个插件
- 打包会生成.gz的文件
- 如何看浏览器中是否使用了gzip
    浏览器控制台 点开相关js文件
    请求头 Accept-Encoding: gzip, deflate, br
    响应头 Content-Encoding: gzip
  性能最大化

### 打包app
- android ios
- h5运行环境（五大浏览器，浏览器内核(android, iox), 小程序，微信公众号）
- 打包工具 hbuildx
  创建一个app项目，把dist目录文件复制到app目录下
  打开mainifest.json文件，获取唯一的id
  发行---原生app---云打包---选择android--使用Dcloud老版本证书--打包
  初次打包需要注册Dcolud账号密码
- 打包成功后可以下载
- mumu模拟器运行apk文件
  模拟器右下角---添加apk文件
- 打包后得dist可以发布到服务器上，也可以打包成app

### 打包部署模式
- hash   打包后dist直接使用http容器运行，本地及线上相同
  路径中有#  
  可以刷新页面

- history   打包后通过http容器运行刷新404
  路径中没有#  
  不可以刷新页面(脚手架中可以刷新，线上不可以)
  解决：需要讲将前端与后端一起部署，由后端负责跳转前端（在讲node.js说明）

