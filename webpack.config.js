const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
        globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }) },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=images/[name].[ext]',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'true',
        }),
        new CopyWebpackPlugin([
            { from: 'src/data', to: 'images' },
        ]),
        new ExtractTextPlugin('bundle.css'),
    ],
};

const serverConfig = {
    entry: './src/server/server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'server.js',
        publicPath: '/',
        globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }) },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=images/[name].[ext]',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'false',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                API_KEY: process.env.API_KEY,
            },
        }),
        new CopyWebpackPlugin([
            { from: 'src/data', to: 'images' },
        ]),
        new ExtractTextPlugin('bundle.css'),
    ],
};

module.exports = [browserConfig, serverConfig];
