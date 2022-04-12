### Vue3
#### 一、项目搭建
- 1、通过脚手架 Vite
```cmd
npm init vite hello-vue3 -- --template vue # 或 yarn create vite hello-vue3 --template vue
```

- 2、通过脚手架 vue-cli
```cmd
vue create hello-vue3 #选择vue3版本进行搭建
```

**vite和vue-cli4的区别：**
vue-cli基于webpack构建,并且有一些默认的预设配置,在服务启动之前会把所有代码打包成bundle,然后启动服务,提供给浏览器使用,所以vue-cli4在开发一些大型项目的时候,越到后面服务启动的越慢。
vite为了解决服务器动慢的问题,使用的ESbuild预编译依赖,比JS编写的打包器构建依赖要快很多倍。为了避免每次启动项目的时候要重建整个包,Vite把预构建的回来缓存到了node_modules/.vite。

#### 变动的地方
1、createApp(App)
2、template里面可以有多个根组件
3、引用其他组件的时候不需要进行注册就能使用
4、组合式API能够将同一个逻辑关注点相关代码收集在一起,在setup中使用。