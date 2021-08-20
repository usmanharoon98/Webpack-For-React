const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const port = process.env.PORT || 5000;

module.exports = {
  // mode tells webpack this config will be either "development" or "production"  
  mode: 'development',
  // Specifies the entry point of your application
  entry: {
      app: './src/index.js'
  },
  // output tells webpack how to write the compiled files to desk
  output: {
      //  file name of the bundle application
      filename: 'bundle.[hash].js', 
      // hot reloading won't work as expected for nested routes without it
      publicPath: '/'
  },
  //devtool will create source maps to help for debugging
  devtool: 'inline-source-map',
  target: 'web',
  resolve: {
      extensions: ['.tsx', '.ts', '.js', 'jsx'],
      alias: {
          // Replace react-dom with the custom react-dom from hot-loader
          "react-dom": "@hot-loader/react-dom"
      }
  },
  // what type of modules your application includes
  module: {
      // how we handle each different types of module
      rules: [
          {
              //we test for files with a .js extension
              test: /\.js$/,
              // excluding the node modules
              exclude: /node_modules/,
              // use babel via babel-loader
              use: ['babel-loader']
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
              test: /\.css$/,
              use: [
                  // Creates `style` nodes from JS strings
                  'style-loader', 
                  // Translates CSS into CommonJS
                  'css-loader', 
                  // tool for transforming CSS with JavaScript plugins  
                  'postcss-loader'
                ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
              test: /\.svg$/,
              use: ['@svgr/webpack']
          }
      ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin({
          title: 'hot module replacement',
      }),
      new HtmlWebpackPlugin({
          // we specify the html template
          template: 'public/index.html',
      }),
      new ReactRefreshWebpackPlugin()
  ],
  devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      // Enable HMR on the server 
      hot: true 
  }
};