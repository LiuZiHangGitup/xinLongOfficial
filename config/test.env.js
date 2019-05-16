'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv,  {
NODE_ENV:'"testing"', 
BASE_API:'"http://192.168.0.105:8080/xinlong/home'
})
