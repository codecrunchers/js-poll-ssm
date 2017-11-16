/* eslint-disable global-require, import/no-dynamic-require */
const logger = require('../src/logger')
'use strict'

let config
if (process.env.NODE_ENV === 'development') {
    config = require('dotenv').config({
        silent: true
    }).parsed
} else {
    const providerType = process.env.PROVIDER_TYPE
    try {
        config = require(`./${providerType}`)
    } catch (ex) {
        if (ex.code === 'MODULE_NOT_FOUND') {
            throw new Error('No config for process ' + providerType)
        }
        throw ex
    }
}

logger.debug({
    obj: config
}, 'Config Dump')

module.exports = config
