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
        'client.js': path.resolve(__dirname, 'src/client.js')
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
