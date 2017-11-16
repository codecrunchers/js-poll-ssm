'use strict'
const logger = require('./logger')
var Dict = require('collections/dict')
var Map = require('collections/map')
const config = require('../config')

module.exports = {
    dict: new Dict({}),
    set: function(parameters) {
        logger.debug({obj : parameters},'Set Values')
        let filteredParams = parameters.map((param, index, params) => {
            var entry = []
            entry.add(param.Name)
            entry.add(param.Value)
            return entry
        })
        //const paramMap = new Map(filteredParams)
        module.exports.dict.addEach(filteredParams)
    },
    get: function(key) {
        logger.debug('Get %s', key)
        return module.exports.dict.get(config.keyPrefix + key) 
    }
}
