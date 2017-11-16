/* eslint-disable global-require */
'use strict'
const logger = require('./logger')
const config = require('../config')
const providerType = config.providerType
const REDIS_PROVIDER = 'redis'
const AWS_PROVIDER = 'aws'

logger.debug({obj: config.providerType}, 'Initialising Provider')

if (providerType === REDIS_PROVIDER) {
    logger.debug('Redis Provider')
    require('../provider/redis')
} else if (providerType === AWS_PROVIDER || providerType === undefined) {
    logger.debug('AWS Provider')
    require('../provider/aws')
}
