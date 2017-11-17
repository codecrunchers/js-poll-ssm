//'use strict'
var logger = require('./logger')
var config = require('../config')

var providerFactory = require('./store.providerfactory.js')({
    logger: logger,
    config: config
})

providerFactory.create({})

