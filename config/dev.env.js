'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // NODE_ENV: '"development"'
  
  NODE_ENV: process.env.VUE_APP_ROOT_API
})
