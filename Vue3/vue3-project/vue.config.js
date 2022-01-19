module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'vue3后台管理系统 '
        return args
      })
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

}