'use strict'
const logger = require('logger')
const config = require('config')
var Map = require('collections/map')

module.exports = {
    set: function(parameters) {
        let filteredParams = filterParamStoreKeys(parameters)
        for (var _envCount = 0; _envCount < filteredParams.length; _envCount++) {
            setEnvironmentVariable(filteredParams[_envCount])
        }
    }
}


function setEnvironmentVariable(keyValueArray) {
    let _key = keyValueArray[0]
    _key = _key.substr(_key.lastIndexOf("/") + 1)
    let _val = keyValueArray[1]
    process.env[_key] = _val
    logger.debug({
            key: _key,
            value: _val
        },
        'Set')
}


function filterParamStoreKeys(parameters) {
    return parameters.map((param, index, params) => {
        let entry = []
        entry.add(param.Name)
        entry.add(param.Value)
        return entry
    })
}
