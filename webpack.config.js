const path = require('path');

const config = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: [
        	path.resolve(__dirname, 'node_modules')
        ],
        loaders: 'babel-loader',
        query: {
          presets : ['react', 'es2015'],
        }
    }]
  },
  watch: true
};

module.exports = config