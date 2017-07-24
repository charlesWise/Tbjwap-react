'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    host: '0.0.0.0',
    proxy: {
        "/api": {
            target:'http://tbjtest.toubaojia.com',
            changeOrigin: true,
            pathRewrite: {'^/api' : ''}
        }
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss',  '.less'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      reducers: `${defaultSettings.srcPath}/reducers/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      components: `${defaultSettings.srcPath}/components/`,
      views: `${defaultSettings.srcPath}/views/`,
      images: `${defaultSettings.srcPath}/images/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      service: `${defaultSettings.srcPath}/service/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      sources: `${defaultSettings.srcPath}/sources/`,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};
