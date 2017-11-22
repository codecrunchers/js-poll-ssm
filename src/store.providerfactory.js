/* eslint-disable global-require */
'use strict'
const config = require('../config')
const logger = require('../logger')
const REDIS_PROVIDER = 'redis'
const AWS_PROVIDER = 'aws'
const providerType = config.providerType.toLowerCase()

module.exports = {
    create: function() {
        try {
            logger.debug('Initialising Provider:', providerType)
            return require(`../provider/${providerType}`)()
        } catch (e) {
			logger.error("Fatal:", e)
            throw new Error('Invalid Provider Specified: ' + providerType)
        }
    }
}
