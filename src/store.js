const logger = require('./logger')
var Dict = require('collections/dict');

module.exports = {
    set: function(key, value) {
        logger.debug('Set %s=>%s', key, value)
        Dict.set(key, value)
    },
    get: function(key) {
        logger.debug('Get %s', key)
        Dict.get(key)
    }
}
