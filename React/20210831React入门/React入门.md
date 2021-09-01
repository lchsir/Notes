### React
#### React简介
React是Facebook用来创建用户界面的JS库,在2013年开源的。React不是一个MVC框架,而是一个用于构建组件化UI的库,是一个前端界面开发工具,所以很多人认为React是MVC中的V(视图)。React的存在能够很好的解决"构建随着时间数据不断变化的大规模应用程序",React能够引导我们重新思考如何构建应用程序。React的核心就是封装可复用性高的组件,各个组件维护自己的状态和UI,当状态变更,自动重新渲染整个组件。
前端主流框架有Vue、React、Angular。Vue和React是受欢迎程度最高的框架，是MMVM框架(视图模型),Angular由于革命性太高，每次一个新版本发布之后总是颠覆了前面的版本，因此维护成本很高。

#### React核心思想
React的哲学以及核心思想是**封装组件**,各个组件维护自己的状态和UI,当状态变更,自动更新渲染整个组件。
基于这种方式的一个直观感受就是我们不再需要不厌其烦地来回查找某个DOM元素,然后操作DOM去更改UI。

#### React包含的概念
**1、组件**

```js
// 函数式组件
function Hello() {
    return <h1>Hello,jianan</h1> 
}
ReactDOM.render(
    <Hello />,
    document.getElementById('root1')
)
```
React应用都是构建在组件之上,上面的Hello就是一个React构建的组件,render方法会把这个组件显示到页面上的某个元素mountNode里面，显示的内容就是`<h1>Hello,jianan</h1>`。
在组件中有两个比较核心概念是props和state,这里没有进行展示,后面会学习到。props主要用来进行传值,state主要用来定义组件内部的状态。
**2、JSX**
从上面的代码中可以看到HTML代码直接嵌入进JS代码里面,这个就是React中的JSX语法,能够在HTML中写JS,也能够在JS中写HTML。对于Vue重度爱好者来说使用React是非常痛苦的一件事。因为前端一直都以"结构样式行为相分离"为开发思想,而React恰恰是让JS中嵌入HTML。
**3、Virtual DOM**
当组件状态state有更改的时候,React会自动调用组件的render方法重新渲染整个组件的UI。当然如果真的这样大面积的操作DOM,性能会是一个很大的问题,所以React实现了一个VirtualDOM,组件DOM结构就是映射到这个VirtualDOM上。
React在这个虚拟DOM中实现了一个diff算法,当要重新渲染组件的时候,会通过diff寻找到要变更的DOM节点,再把这个修改更新到浏览器实际的DOM节点上,所有实际上不是真的渲染整个DOM树。这个虚拟DOM是一个纯粹的JS数据结构,所以性能上会比原生的DOM快很多。以往的JS或者JQuery都是通过大量操作DOM,会导致渲染时间很慢。React不会直接去操作DOM,而是用Model来代替DOM,用JS生成虚拟的DOM树,只有在最后一次才会对DOM进行操作。
**4、Data Flow**
'单向数据绑定'是React推崇的一种应用架构的方式。当应用足够复杂时才能体会到它的好处,虽然在一般场景下我们可能会意识不到它的存在,但不影响我们开始使用React,我们只需要了解有这么个概念。
#### React入门
```js
// react底层的核心库
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
// React操作DOM的核心库,类似于jquery
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
// 用于解析ES6语法
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
#### 基础语法
```js
ReactDOM.render() // 渲染元素
React.createElement() // 创建元素
React.Component // 创建组件,使用extends继承
```
