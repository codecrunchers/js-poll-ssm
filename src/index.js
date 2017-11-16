'use strict'
const logger = require('./logger')
const config = require('../config')
var providerFactory = require('./store.providerfactory.js')({
    logger: logger
    config: config
})
providerFactory.test({})
