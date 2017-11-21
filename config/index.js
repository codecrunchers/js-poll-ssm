/* eslint-disable global-require, import/no-dynamic-require */
'ue strict'
const logger = require('logger')

const providerType = process.env.PROVIDER_TYPE
var config
if (process.env.NODE_ENV === 'development') {
    config = require('dotenv').config({
        silent: true
    }).parsed
} else {
    try {
        config = require(`./${providerType}`)
    } catch (ex) {
        if (ex.code === 'MODULE_NOT_FOUND') {
            throw new Error('No config for process ' + providerType)
        }
        throw ex
    }
}
module.exports = config
