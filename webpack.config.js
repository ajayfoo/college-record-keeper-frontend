import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const config = {
  entry: {
    workspace: './src/app.js',
    login: './src/login/index.js',
  },
  output: {
    path: resolve(import.meta.dirname, 'dist'),
  },
  devServer: {
    open: false,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'workspace.html',
      template: './src/templates/workspace.html',
      chunks: ['workspace'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/templates/login.html',
      chunks: ['login'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        resolve: { fullySpecified: false },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

export default () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
