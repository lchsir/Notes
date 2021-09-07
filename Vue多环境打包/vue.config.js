let CompressionWebpackPlugin = require("compression-webpack-plugin")
module.exports = {
  // 打包文件访问的相对目录  独立项目，通过项目根目录访问
  publicPath: './', // 访问方式： http:localhost:3000
  // 如果想要打包的子域下边 
  publicPath: '/map', // 访问方式： http://www.baidu.com/map  需要在dist中加一层map目录
  // 开发需要map，线上不需要
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // 配置webpack
  configureWebpack: config => {
    let plugins = [
      new CompressionWebpackPlugin({
        algorithm: 'gzip', // 压缩方式，使用哪种插件
        test: /\.js$|\.css$/, // 匹配压缩文件，对哪些文件进行压缩
        threshold: 10204, // 对大于10k的文件压缩
      })
    ]
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
      config.plugins = [config.plugins, ...plugins] // vueCli默认提供的插件(config.plugins) + 自定义的插件
    } else {
      config.mode = 'development'
    }
    // config -- vuecli默认配置
    Object.assign(config, {
      externals: { // 打包排除的依赖包
        vue: 'Vue',
        axios: 'axios',
        element: 'element-ui'
      }
    })
  }

}