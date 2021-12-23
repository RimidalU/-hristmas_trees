const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
  new CopyPlugin({
    patterns: [
        {from: './src/assets/audio', to: './assets/audio'},
        {from: './src/assets/ball', to: './assets/ball'},
        {from: './src/assets/bg', to: './assets/bg'},
        {from: './src/assets/svg', to: './assets/svg'},
        {from: './src/assets/toys', to: './assets/toys'},
        {from: './src/assets/tree', to: './assets/tree'},
        {from: './src/assets/glob', to: './assets/glob'},        
    ],
}),],
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
};