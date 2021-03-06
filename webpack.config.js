const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

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
    explore: assetsForPage('explore'),
    compare: assetsForPage('compare'),
    about: assetsForPage('about'),
    admin: assetsForPage('admin'),
    login: assetsForPage('login'),
    doubts: assetsForPage('doubts'),
    budget: assetsForPage('budget'),
    glosary: assetsForPage('glosary'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.s?css$/,
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
