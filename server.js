const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev.js')

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n')
})