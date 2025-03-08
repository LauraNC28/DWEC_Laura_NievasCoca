import { merge } from 'webpack-merge';
import common from './webpack.common.js'; // Asegúrate de que este archivo también use ESM

export default merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.legacy.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: '> 0.25%, not dead',
              }],
            ],
          },
        },
      },
    ],
  },
});