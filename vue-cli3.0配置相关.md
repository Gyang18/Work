# 设置项目路径别名：



## 第一种通过configureWebpack参数设置
``
configureWebpack: {
resolve: {
   alias: {
       // 重新设置 alias,扩展项目路径别名
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api')
      ...
    }
  }
}
``
## 第二种通过chainWebpack设置
### 需要先设置
``const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}``

``
chainWebpack: config => {
    config.resolve.alias
      .set('@api', resolve('src/api'))
      .set('@plug', resolve('src/plugins'))
      .set('@page', resolve('src/pages'))
      .set('@comp', resolve('src/components'))
      .set('@utils', resolve('src/utils'))
  }
``
