const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: './example/index.html',
  }),
];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './example/index.js',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example.js',
  },
  plugins,
};
