const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HTMLWebpackPlugin({
            hash: true,
            title: __dirname,
            header: __dirname,
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    mode: 'development',
    output: {
        clean: true
    }
}