const nodeExternals = require('webpack-node-externals');
const path = require('path');

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
    }
};

const serverConfig = {
    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()],
    entry: {
        'index.js': path.resolve(__dirname, 'src/index.js')
    },
    module: {
        rules: [js]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    }
};

const clientConfig = {
    target: 'web',
    entry: {
        'home.js': path.resolve(__dirname, 'src/public/home.js')
    },
    module: {
        rules: [js]
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name]'
    }
};

module.exports = [serverConfig, clientConfig];
