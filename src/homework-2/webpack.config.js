const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'none',
  devServer: {
    static: './dist',
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ]
}