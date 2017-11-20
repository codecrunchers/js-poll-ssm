/* eslint-disable global-require */
'use strict'
const logger = require('logger')
const config = require('config')
const REDIS_PROVIDER = 'redis'
const AWS_PROVIDER = 'aws'

const providerType = config.providerType.toLowerCase()

module.exports = {
    create: function() {
        logger.debug({
            obj: providerType
        }, 'Initialising Provider')

        if (providerType === REDIS_PROVIDER) {
            return require('provider/redis')
        } else if (providerType === AWS_PROVIDER) {
            return require('provider/aws')
        } else {
            logger.error("Cannot Create Provider")
            throw new Error("Invalid Provider Specified '" + providerType + "'");
        }
    }
}
