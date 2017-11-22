'use strict'
const logger = require('../logger')
const paramStore = require('../store')
const ParamProvider = require('./store.providerfactory.js').create({})()

ParamProvider.on('update', (data) => paramStore.set(data))

ParamProvider.on('uncaughtException', (e) => logger.error({
    obj: e
}, 'Uncaught Exception in ParamProvider'))

ParamProvider.on('error', (e) => logger.error({
    obj: e
}, 'Error in ParamProvider'))

ParamProvider.start()
