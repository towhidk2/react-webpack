const path = require('path');
const HTMLWepackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },

    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        },
    },

    devServer: {
        port: '5000'
    },

    plugins: [
        new HTMLWepackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
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
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },

            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    }
}