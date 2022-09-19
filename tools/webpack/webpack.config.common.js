const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('../../configs/app.json')

const resolvePath = (dir) => path.join(__dirname, '../../', dir);

module.exports = () => ({
  target: ['web', 'es5'],
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: resolvePath('./src/components'),
      fixtures: resolvePath('./src/fixtures'),
      images: resolvePath('./public/images'),
      styles: resolvePath('./styles'),
      views: resolvePath('./src/views'),
      utility: resolvePath('./src/utility'),
      api: resolvePath('./src/api'),
      assets: resolvePath('./src/assets'),
      router: resolvePath('./src/router'),
      helpers: resolvePath('./src/helpers')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|wav|mp3|gif|ico)$/,
        type: 'asset/resource',
      },
      {
        type: 'asset/inline',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html'),
      inject: true,
      title: appConfig.title || appConfig.name,
      label: appConfig.brand.label || appConfig.name,
    }),
  ],
});
