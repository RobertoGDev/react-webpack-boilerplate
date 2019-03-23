import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import OptimizeCSSPlugin from "optimize-css-assets-webpack-plugin";
import common from "../webpack.config";

const cleanPlugin = new CleanWebpackPlugin();
const cssMiniPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[hash].css"
});

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: [cleanPlugin, cssMiniPlugin],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSPlugin()]
  }
});
