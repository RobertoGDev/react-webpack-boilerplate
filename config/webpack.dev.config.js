import webpack from "webpack";
import path from "path";
import merge from "webpack-merge";
import common from "../webpack.config";

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 3000,
    hot: true
  },
  devtool: "source-map",
  plugins: [hotModulePlugin]
});
