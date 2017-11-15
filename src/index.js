/* eslint-disable global-require */
'use strict'
const logger = require('./logger')
const providerType = process.env.PROVIDER_TYPE

logger.debug('Initialising')

if (providerType === 'redis') {
    logger.debug("Redis Provider")
    require('../provider/redis')
} else {
    logger.debug("Defaulting to AWS")
    require('../provider/aws')
}

logger.debug('Done')
