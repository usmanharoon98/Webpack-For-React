const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const port = process.env.PORT || 5000;

module.exports = {
  mode: 'development',
  entry: {
      app: './src/index.js'
  },
  output: {
      filename: 'bundle.[hash].js',
      publicPath: '/'
  },
  devtool: 'inline-source-map',
  target: 'web',
  resolve: {
      alias: {
          "react-dom": "@hot-loader/react-dom"
      }
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
          }
      ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin({
          title: 'hot module replacement',
      }),
      new HtmlWebpackPlugin({
          template: 'public/index.html',
      }),
      new ReactRefreshWebpackPlugin()
  ],
  devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      hot: true
  }
};