'use strict'
const logger = require('./logger')
var Dict = require('collections/dict')
var dict = new Dict({})

module.exports = {
    set: function(key, value) {
        logger.debug('Set %s=>%s', key, value)
        dict.set(key)
    },
    get: function(key) {
        logger.debug('Get %s', key)
        dict.get(key)
    }
}
