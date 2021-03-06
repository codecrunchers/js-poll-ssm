'use strict'
const config = require('../config')
const logger = require('../logger')
var Map = require('collections/map')
const KEY_INDEX = 0
const VALUE_INDEX = 1
const KEY_DELIM = "/"


module.exports = () => {
    const setEnvironmentVariable = (keyValueArray) => {
        let _key = keyValueArray[KEY_INDEX]
        _key = _key.substr(_key.lastIndexOf(KEY_DELIM) + 1)
        let _val = keyValueArray[VALUE_INDEX]
        process.env[_key] = _val
        logger.debug(keyValueArray, 'Set Key/Val Pair as Env Vars')
    }

    const filterParamStoreKeys = (parameters) => {
        return parameters.map((param, index, params) => {
            let entry = []
            entry.add(param.Name)
            entry.add(param.Value)
            return entry
        })
    }
    return {
        set: function(parameters) {
            let filteredParams = filterParamStoreKeys(parameters)
            for (var _envVarIndex = 0; _envVarIndex < filteredParams.length; _envVarIndex++) {
                setEnvironmentVariable(filteredParams[_envVarIndex])
            }
        }
    }
}
