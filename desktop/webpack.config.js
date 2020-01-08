const path = require("path");
const webpack = require("webpack");

module.exports = env => ({
  watch: true,
  entry: {
    excalidraw: "../src/index.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../desktop/dist")
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
        use: ["file-loader"]
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
});
