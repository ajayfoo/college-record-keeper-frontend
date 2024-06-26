import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const config = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  devServer: {
    open: false,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CRK',
    }),
    new DotenvWebpackPlugin(),
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
