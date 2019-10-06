const webpack = require('webpack');

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/js/bundle.min.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 4000,
        open: true
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        autoprefixer: {
                            browser: ["last 2 versions"]
                        },
                        plugins: () => [
                            autoprefixer
                        ]
                    }
                },
                'sass-loader',
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/bundle.min.css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js'
        })
    ]
};