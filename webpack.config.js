const path = require('path');
const HTMLWepackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
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
            }
        ]
    }
}