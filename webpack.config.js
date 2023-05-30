'use strict'

const path = require('path')

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: { static: "./dist" },
    /* devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8086,
        hot: true
    }, */
    plugins: [
        new HtmlWebpackPlugin({
            /* title: '管理输出', */
            title: 'Development',
        }),
    ],
    output: {
        /* filename: 'bundle.js', */
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/",
    },
    optimization: { runtimeChunk: 'single' },
    module: {
        rules: [{
            /* css静态资源 */
            test: /\.(scss|css)$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    }
                },
                { loader: 'sass-loader' }
            ]
        }, {
            /* 图片静态资源 */
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }, {
            /* 字体静态资源 */
            test: /\.(TTF|ttf|otf|woff2|woff)$/i,
            type: "asset/resource",
        }, {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader']
        }, {
            test: /\.(xml)$/i,
            use: ['xml-loader']
        }, {
            test: /\.toml$/i,
            type: 'json',
            parser: {
                parse: toml.parse,
            },
        },
        {
            test: /\.yaml$/i,
            type: 'json',
            parser: {
                parse: yaml.parse,
            },
        },
        {
            test: /\.json5$/i,
            type: 'json',
            parser: {
                parse: json5.parse,
            }
        }]
    }
}