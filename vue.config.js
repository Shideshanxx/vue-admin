const path = require('path')

const aliasMap = {
  '~api': 'src/api',
  '~assets': 'src/assets',
  '~components': 'src/components',
  '~utils': 'src/utils',
  '~plugins': 'src/plugins',
  '~views': 'src/views'
}

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    Object.keys(aliasMap).forEach(key => {
      config.resolve.alias.set(key, resolve(aliasMap[key]))
    })
  }
}
