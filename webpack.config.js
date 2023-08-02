const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: ["core-js", "./src/main.ts", "./src/css/app.css"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        hot: true,
        compress: true,
        host: "localhost",
        port: 8080,
        contentBase: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: /(?:node_modules)/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        })
    ],
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".js", ".ts"]
    }
};