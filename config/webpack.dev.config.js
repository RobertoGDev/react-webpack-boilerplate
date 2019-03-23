const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("../webpack.config");

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3000,
        hot: true
    },
    devtool: 'source-map',
    plugins: [hotModulePlugin]
});