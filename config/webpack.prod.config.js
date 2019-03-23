const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const common = require("../webpack.config");


const cleanPlugin = new CleanWebpackPlugin();
const cssMiniPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[hash].css"
});

module.exports = merge(common, {
    mode: "production",
    devtool: false,
    plugins: [
        cleanPlugin,
        cssMiniPlugin
    ],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSPlugin()
        ]
    }
});