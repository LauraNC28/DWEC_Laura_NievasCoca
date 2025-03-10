const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
entry: ['@babel/polyfill', './fuente/src/app.js'], // Punto de entrada
output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'docs') // Carpeta de salida (docs/)
},

module: {
    rules: [
    {
        test: /\.js$/, // Transpila archivos .js
        exclude: /node_modules/, // Ignora node_modules
        use: {
          loader: 'babel-loader', // Usa babel-loader
        },
    },
    
    {
      test: /\.css$/, // Maneja archivos .css
      use: [
          'style-loader', // Inyecta los estilos en el DOM
          'css-loader', // Interpreta los archivos CSS
      ],
  },
    ],
},

plugins: [
    new CleanWebpackPlugin(), // Limpia la carpeta de salida antes de cada build
    new HtmlWebpackPlugin({
    template: './fuente/index.html' // Usa este archivo como plantilla para el HTML
    }),
],
mode: 'production', 
};