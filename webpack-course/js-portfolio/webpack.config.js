const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  //entry point of our application
  entry: "./src/index.js",
  //where you are going to send what you are going to prepare webpacks to
  output: {
    // path is where the folder will be where the files will be saved.
    // With path.resolve we can tell where the folder is going to be and the location of the folder.
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", //bundle
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
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
          filename: "assets/fonts/[hash][ext][query]", // Output directory
        } /*  
        old version
        attention when using alias change route
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            // limit: when passed true/false, enables/disables base64 transformation
            // when a number or string is given, indicates the maximum size of a file in bytes
            limit: 10000,
            //type of data we use, the characteristics our resources have - size and format type
            //Multipurpose Internet Mail Extensions
            //It is a label used to identify a type of data that is used so that the software knows how to work with that data. It serves the same purpose on the internet as file extensions (.txt, .docx, .xlsx) in Microsoft Windows.
            mimetype: "application/font-woff",
            //respect the name and the extension it has
            name: "[name].[ext]",
            outputPath: "./assets/fonts",
            publicPath: "../assets/fonts",
            // we will not use it in our configuration
            // By default, modules are generated with ES syntax. To enable the use of common JS syntax, the value is false
            esModule: false,
          },
        },
      }, */,
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
    new MiniCssExtractPlugin(),
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
  ],
};
