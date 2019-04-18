/**
 * 解决webstrom 无法识别vue中@等符号
 * @author 赵桂炀
 * @date 2019/4/8
 */
'use strict'
const path = require('path')
 
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
 
module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '@pages': resolve('src/pages'),
      '@comp': resolve('src/components'),
      '@api': resolve('src/api'),
      '@plug': resolve('src/plugins'),
      '@utils': resolve('src/utils')
    }
  }
}
