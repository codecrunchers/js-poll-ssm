'use strict'
const logger = require('logger')
const paramStore = require('store')
const ParamProvider = require('src/store.providerfactory.js').create({})
var paramProvider = ParamProvider()
paramProvider.on('update', (data) => logger.info(data))

paramProvider.on('uncaughtException', (e) => logger.error({
    obj: e
}, "Uncaught Exception in ParamProvider"))
paramProvider.on('error', (e) => logger.error({
    obj: e
}, "Error in ParamProvider"))
paramProvider.start()
