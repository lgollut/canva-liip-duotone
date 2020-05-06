const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'script.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
