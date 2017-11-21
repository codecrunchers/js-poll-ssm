'use strict'
const providerType = process.env.PROVIDER_TYPE
module.exports = require(`./${providerType}`)
