const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.s?[ac]ss/, //to recognize files with extension css, scss
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[contenthash][ext][query]",
        },
        use: [
          {
            loader: "file-loader",
          },
        ],
      }, //for files with extension png, svg etc
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // include font types  extension woff or woff2
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[contenthash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "assets/[name].[contenthash].css" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images",
        },
      ],
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    //is only used in development mode
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true,
  },
};
