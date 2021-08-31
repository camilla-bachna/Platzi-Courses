const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
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
        test: /\.s[ac]ss$/, //this regular expression takes either scss or sass
        //if also css wanted: /\.s?[ac]ss/ or /\.(css|scss)$/ or /\.(sa|sc|c)ss$/i
        use: ["style-loader", "css-loader", "sass-loader"], // style-loader injects css into the html in a <style></style> tag
        /*  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], 
        mini-css-extract-plugin also has a built-in loader, can use it to reduce number of dependencies in project, 
        creates a file and injects it into the html as a <link/> */
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  devServer: {
    //is only used in development mode
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3006,
    open: true,
  },
};
