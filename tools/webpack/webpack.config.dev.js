const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const webpackConfigCommon = require("./webpack.config.common");

module.exports = () =>
  merge(webpackConfigCommon(), {
    mode: "development",
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js",
    },
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
    },
    devServer: {
      open: true,
      historyApiFallback: true,
      hot: true,
      port: 3000,
      compress: true,
      client: {
        logging: "none",
        webSocketTransport: "ws",
      },
      webSocketServer: "ws",
    },
    optimization: {
      minimize: false,
      moduleIds: "named",
      nodeEnv: "development",
      splitChunks: {
        chunks: "all",
        minChunks: 2,
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                webpackImporter: false,
                warnRuleAsWarning: true,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, "../../styles")],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true,
        minimize: false,
      }),
    ],
  });
