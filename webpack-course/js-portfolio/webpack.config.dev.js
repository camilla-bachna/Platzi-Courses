const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  //entry point of our application
  entry: "./src/index.js",
  //where you are going to send what you are going to prepare webpack to
  output: {
    // path is where the folder will be where the files will be saved.
    // With path.resolve we can tell where the folder is going to be and the location of the folder.
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", //bundle, with contenthash show me what the hash of this build was
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  mode: "development", //activate development modus
  resolve: {
    // Here we put the extensions that we will have in our project for webpack to read them, e.g. jsx (React).
    extensions: [".js"],
    alias: {
      //we have utils, templates, styles and images
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@templates": path.resolve(__dirname, "src/templates/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        //Test declares which file extension the loader will apply.
        //regex, use any with extension m (module) or js
        test: /\.m?js$/,
        //otherwise application would break down
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        //to recognize files with extension css
        test: /\.css|.styl$/i,
        //can use it with an object or array depending on configuration if plugins
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      //for the file with extension png
      //like this I can import resources
      //test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //generator: { filename: 'static/images/[hash][ext][query]', },},
      { test: /\.png/, type: "asset/resource" },
      {
        //for fonts (file with extension woff or woff2)
        //  Webpack 5 using Asset Modules we can do the same and in an optimized way.

        test: /\.(woff|woff2|eot|ttf|otf)$/i, // include font types
        type: "asset/resource", // Type of module to use (the same can be used for image files)
        generator: {
          filename: "assets/fonts/[contenthash][ext][query]", // Output directory
        },
      },
    ],
  },
  plugins: [
    //new instance
    new HtmlWebpackPlugin({
      //inside object we have configurations
      //so that it injects elements
      // default true ... true || 'head' || 'body' || false
      inject: true,
      //route to template html
      template: "./public/index.html",
      //final name of file
      filename: "./index.html",
    }),
    //new instance
    new MiniCssExtractPlugin({ filename: "assets/[name].[contenthash].css" }),
    new CopyPlugin({
      patterns: [
        {
          //from where we want to move files
          from: path.resolve(__dirname, "src", "assets/images"),
          //to dist
          to: "assets/images",
        },
      ],
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    //dist because this is the folder where all our files are generated
    static: path.join(__dirname, "dist"),
    compress: true,
    //when using HTML5 History API the index.html page will be displayed instead of a 404 response
    historyApiFallback: true,
    port: 3005,
    open: true,
  },
};
