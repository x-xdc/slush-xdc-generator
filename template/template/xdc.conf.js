var xdc = require('xdc')

xdc.set({
  entry: './src/app.js',
  dist: './dist',
  template: 'src/index.template.html',

  // development
  devServer: true,

  // production
  clean: true,

  extends: []
})

module.exports = xdc.resolve()
