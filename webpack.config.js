
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

entry: path.join(__dirname, '/src/app.js'),
output: {
      filename: 'build.js',
    path: path.join(__dirname, '/dist')},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
    },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        use:[
          {
            loader: 'svg-inline-loader?classPrefix'
          }
        ]

    },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
