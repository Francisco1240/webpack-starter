const HtmlWebPackPlugin     = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CopyPlugin            = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: true,
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
                exclude: /style.css$/,
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader'
            },

        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi WebPack App',
            template: './src/index.html',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        
        new CopyPlugin({
            patterns:  [
               { from: 'src/assets/', to : 'assets/' }
            ]
        }),
    ]
};