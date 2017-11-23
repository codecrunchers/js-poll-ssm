/* eslint-disable global-require, import/no-dynamic-require */
'ue strict'
const logger = require('../logger')
let config
if (process.env.NODE_ENV === 'development') {
    config = require('dotenv').config({
        silent: true
    })
}

const providerType = process.env.PROVIDER_TYPE
try {
    config = require(`./${providerType}`)
} catch (ex) {
    if (ex.code === 'MODULE_NOT_FOUND') {
        throw new Error('No config for process ' + providerType)
    }
    throw ex
}

module.exports = config
