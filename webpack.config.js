const path = require('path');
const HTMLWepackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {

    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        filename: 'bundle.[contenthash].js', 
        path: path.join(__dirname, 'dist'),
        clean: true
    },

    // optimization: {
    //     splitChunks: {
    //       // include all types of chunks
    //       chunks: 'all',
    //     },
    // },

    devServer: {
        port: '5000'
    },

    plugins: [
        new HTMLWepackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),

        new TerserPlugin(),

        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),

    ],

    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }

        ]
    }
}