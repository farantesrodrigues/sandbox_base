const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: {
        whm: 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        app: './src/app.ts'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': false })
    ]
})