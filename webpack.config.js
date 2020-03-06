const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// TODO: autobind class methods
// TODO: content hash as part of the filenames of the css and js files. Find a way to connect the hashes with the layout

// TODO: separate vendor libs into vendor script lib

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    'home': [
      path.resolve(__dirname, 'src/app/pages/home/client.js'),
      path.resolve(__dirname, 'src/app/pages/home/index.scss')
    ],
    'monitor': [
      path.resolve(__dirname, 'src/app/pages/monitor/client.js'),
      path.resolve(__dirname, 'src/app/pages/monitor/index.scss'),
    ],
    'about': [
      path.resolve(__dirname, 'src/app/pages/about/client.js'),
      path.resolve(__dirname, 'src/app/pages/about/index.scss'),
    ],
    'admin': [
      path.resolve(__dirname, 'src/app/pages/admin/client.js'),
      path.resolve(__dirname, 'src/app/pages/admin/index.scss'),
    ],
    'login': [
      path.resolve(__dirname, 'src/app/pages/login/client.js'),
      path.resolve(__dirname, 'src/app/pages/login/index.scss'),
    ],
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
        { loader: 'postcss-loader' }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
