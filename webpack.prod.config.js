const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      warnings: false,
    },
  }),
];

module.exports = {
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
    'prop-types': 'prop-types',
  },
  entry: './src/index.js',
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
    }],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tachyons-msrd.min.js',
    library: 'tachyons-msrd',
    libraryTarget: 'umd',
  },
  plugins,
};
