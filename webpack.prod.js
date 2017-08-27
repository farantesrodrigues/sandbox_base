const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    entry: {
        app: './src/app.ts'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': true })
    ]
})