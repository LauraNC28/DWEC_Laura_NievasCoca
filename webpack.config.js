const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
entry: ['@babel/polyfill', './fuente/src/app.js'],
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
},

module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
    },
    {
        test: /\.ttf$/,
        type: 'asset/resource'
    }
    ]
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    template: './fuente/index.html'
    })
],
mode: 'production'
};