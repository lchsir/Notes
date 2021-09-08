###### <center> 金渡教育VIP内部资料，请勿外传，违者必究。
###### <center>主讲老师：金渡教育Casey
---
#### React项目搭建
脚手架其实就是提高我们生产和开发效率的一个工具。在以往我们学习开发vue项目的时候就知道一般开发的时候都是会使用脚手架进行项目的搭建，那么在React中也是一样的。
使用React脚手架需要我们的电脑具备node、webpack环境。相信这里大家的电脑已经有了这些环境了。在我们的React中默认使用yarn,yarn是由facebook推出的一款新的js包管理工具,当然了也可以使用npm。

1. 使用yarn在本地安装create-react-app: 
```cmd
npm i -g yarn #全局安装yarn
yarn -v #查看yarn版本号
```
- 如何使用npx在本地安装相关包
```cmd
yarn init -y #初始化项目
yarn add -D create-react-app #使用本地安装
npx create-react-app --version #查看脚手架版本
```
npx会自动去查找当前依赖包中的可执行文件,如果找不到,就会去环境变量里找,如果依然找不到,就会帮你安装。
- 使用npx创建react项目
```cmd
npx create-react-app react-demo1
```
在这里,我们没有去全局安装create-react-app,npx就可以执行它。
2. 全局安装create-react-app,这里我们了解一下即可
```cmd
npm i -g create-react-app // 全局安装
create-react-app --version  查看版本号
create-react-app react-demo // 初始化项目
```
npm run eject/yarn eject会复制所有依赖文件和相应的依赖（webpack、babel等）到你的项目。是个单向的操作，一旦 eject ，npm run eject的操作是不可逆的。原本react项目是把所欲的webpack相关配置隐藏起来,执行了eject命令之后就会把所有的相关配置项暴露出来。

```js
--node_modules  项目依赖文件
--public  静态资源目录
目录里的index.html 是项目的入口文件
manifest.json 缓存文件,即使没有网,离线了也能够打开页面
robots.txt 给搜索引擎看的
--src 项目源码核心
index.js 是项目的入口
reportWebVitals.js 前端性能检测工具
setupTests.js 单元测试的
--package.json  项目配置文件
```
其实public目录下我们可以只保留index.html这个文件和favicon.ico这个图标，src目录下我们可以删除其他文件,只保留index.js，这个时候我们发现我们的项目非常的简洁,我们也可以用下面的类组件来写。

```jsx
// import React from 'react';等同于下面的写法
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
class App extends Component {
  render() {
    return <h1>hello react</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
那么此时我们只有一个index.js显然是不合适的,我们不可能把所有的组件都写在这个index.js文件中。
所以我们在index.js同级文件新建一个App.js文件,在里面去定义我们的组件。
在我们做接下来的操作之前,给大家推荐一个好用的插件,叫ES7 React...,这个插件对应的有一些快捷方式,比如输入imrc按下tab键,它就能够快速的补全我们要引入的内容。再比如输入rce按下tab键就能够直接帮我们补全这个组件的模板内容。

```jsx
// App.js文件写入以下内容
import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}

export default App
```
```jsx
// index.js写入以下内容
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
在这里我们不得不提的就是组件思想,我们一般拆分组件的原则是可复用/可组合。也可以按照UI组件和功能组件进行拆分,UI组件只负责渲染,没有事件处理,功能组件有各种功能事件。那么下面我们就继续来封装一些可复用的组件。







