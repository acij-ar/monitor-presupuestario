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
    externals: [nodeExternals()], // TODO: is this necessary?
    entry: {
        'server.js': path.resolve(__dirname, 'src/server.js')
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
        'home.js': path.resolve(__dirname, 'src/app/client/home.js'),
        'monitor.js': path.resolve(__dirname, 'src/app/client/monitor.js'),
        'comparator.js': path.resolve(__dirname, 'src/app/client/comparator.js'),
        'about.js': path.resolve(__dirname, 'src/app/client/about.js'),
    },
    module: {
        rules: [js]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    }
};

module.exports = [serverConfig, clientConfig];
