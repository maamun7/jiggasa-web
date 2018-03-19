var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractCSS = new ExtractTextPlugin('app.app.css');

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname , 'dist'),
        filename: 'app.bundle.min.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractCSS.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test:  /\.sass$/,
                use: ExtractCSS.extract({
                    use: [
                        'css-loader',
                        {
                            'loader': 'sass-loader',
                            options: {
                                outputStyle : 'expanded'
                            }
                        }
                    ]
                })
            },
            {
                test:  /\.scss$/,
                use: ExtractCSS.extract({
                    use: [
                        'css-loader',
                        {
                            'loader': 'sass-loader',
                            options: {
                                outputStyle : 'expanded'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    'url-loader',
                    {
                        options: {
                            limit: 10000
                        }
                    }
                ]
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
        host: '127.0.0.1',
        port: 8080
    }
};

module.exports = config;