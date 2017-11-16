'use strict'
const logger = require('./logger')
var Dict = require('collections/dict')
var Map = require('collections/map')
var dict = new Dict({})

module.exports = {
    set: function(parameters) {
        logger.debug('Set Values')
        let filteredParams = parameters.map((param, index, params) => {
            var entry = new Array()
            entry.add(param.Name)
            entry.add(param.Value)
            return entry
        })
        const paramMap = new Map(filteredParams)
        dict.addEach()
    },
    get: function(key) {
        logger.debug('Get %s', key)
        dict.get(key)
    }
}
