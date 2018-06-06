'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
  devtool: 'source-map',
	entry: ['./app/js/main.js', './app/sass/main.sass'],
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
      	test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
	},
  devServer: {
     watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    stats: 'errors-only',
    contentBase: 'dist',
    compress: true,
    port: '8080',
    open: false,
    overlay: true,
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css'),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ])
  ]
};