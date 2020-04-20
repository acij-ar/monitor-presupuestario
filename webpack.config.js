const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// TODO: autobind class methods

// TODO: separate vendor libs into vendor script lib

const assetsForPage = (pageName) => ([
  path.resolve(__dirname, 'src/app/pages', pageName, 'client.js'),
  path.resolve(__dirname, 'src/app/pages', pageName, 'index.scss'),
]);

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    page: [path.resolve(__dirname, 'src/app/components/page/index.scss')],
    home: assetsForPage('home'),
    monitor: assetsForPage('monitor'),
    about: assetsForPage('about'),
    admin: assetsForPage('admin'),
    login: assetsForPage('login'),
    doubts: assetsForPage('doubts'),
    budget: assetsForPage('budget'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
        { loader: 'postcss-loader' },
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new ManifestPlugin({ fileName: 'manifest.json' }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  }
};
