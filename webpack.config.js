var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve('dev/'),
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        './index.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: '/src',
        filename: 'js/bundle.min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({ template: '../src/index.html' })
    ],
    devServer: {
        inline: true,
        contentBase: '/src',
        host: '0.0.0.0',
        port: 8000
    },
};

/*
devServer: {
    historyApiFallback: true,
},*/

