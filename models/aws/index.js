'use strict'
const config  = require('../../config')
const providerType = config.providerType.toLowerCase()

module.exports = require(`./${providerType}`)
