const nodeExternals = require('webpack-node-externals');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// TODO: autobind class methods
// TODO: content hash as part of the filenames of the css and js files. Find a way to connect the hashes with the layout

// TODO: separate vendor libs into vendor script lib

const rules = [{
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
}];

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
];

const serverConfig = {
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
  },
  externals: [nodeExternals()], // TODO: is this necessary?
  entry: {
    'server.js': path.resolve(__dirname, 'src/server.js')
  },
  module: { rules },
  plugins,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
};

const clientConfig = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    'home': path.resolve(__dirname, 'src/app/client/home'),
    'monitor': path.resolve(__dirname, 'src/app/client/monitor'),
    'about': path.resolve(__dirname, 'src/app/client/about'),
    'admin': path.resolve(__dirname, 'src/app/client/admin'),
    'login': path.resolve(__dirname, 'src/app/client/login'),
  },
  module: { rules },
  plugins,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};

module.exports = [serverConfig, clientConfig];
