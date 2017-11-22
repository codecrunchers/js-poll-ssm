'use strict'
const config  = require('../../config')
const providerType = config.providerType
module.exports = require(`./${providerType}`)
