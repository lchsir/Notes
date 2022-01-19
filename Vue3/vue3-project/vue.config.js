
const path = require('path'); //引入path模块
function resolve(dir){
    return path.join(__dirname,dir) //设置绝对路径
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '美易销管理后台'
        return args
      })
    config.resolve.alias
        .set('@', resolve('src'))
        .set('components', resolve('src/components'))
        // .set('api', resolve('src/api'))
        // .set('common', resolve('src/common'))
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': { // 路径中有 /api 的请求都会走这个代理 , 可以自己定义一个,下面移除即可
          target: 'http://v.juhe.cn/joke',    // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
          secure: false,
          changeOrigin: true,  // 开启代理，在本地创建一个虚拟服务端
          ws: true,       // 是否启用  websockets;
          pathRewrite: {   // 去掉 路径中的  /api  的这一截
              '^/api':''
          }
        },
    },
  }
}