const port = 8998 // dev port
module.exports = {
  lintOnSave: false, // 关闭eslint
  devServer: {
    port: port,
    open: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({ remUnit: 40 }) // 换算的基数
        ]
      }
    }
  }
}
