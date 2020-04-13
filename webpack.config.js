var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractCSS = new ExtractTextPlugin('app.style.css');

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/app.js'
    ],

    output: {
        path: path.resolve(__dirname , 'jiggdist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: ['babel-loader'],
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
                            loader: 'sass-loader',
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
                            loader: 'sass-loader',
                            options: {
                                outputStyle : 'expanded'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: ['html-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        ExtractCSS,
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],

    devServer: {
        inline: true,
        contentBase: './jiggdist',
        host: '127.0.0.1',
        port: 8080
    }
};

module.exports = config;