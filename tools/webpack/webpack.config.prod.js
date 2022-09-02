const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfigCommon = require("./webpack.config.common");

module.exports = () =>
  merge(webpackConfigCommon(), {
    mode: "production",
    output: {
      filename: "static/[name].[contenthash].js",
      path: path.join(process.cwd(), "build"),
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
                modules: {
                  localIdentName: "[hash:base64:5]",
                },
                importLoaders: 1,
              },
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
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
      new MiniCssExtractPlugin({ filename: "static/[name].[contenthash].css" }),
      new webpack.LoaderOptionsPlugin({
        debug: false,
        minimize: true,
      }),
    ],
  });
