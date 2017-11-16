/* eslint-disable global-require */
'use strict'
const logger = require('./logger')
const config = require('../config')
const REDIS_PROVIDER = 'redis'
const AWS_PROVIDER = 'aws'

logger.debug({
    obj: config.providerType
}, 'Initialising Provider')

function create(options) {
	const providerType = config.providerType.toLowerCase()

    if (providerType === REDIS_PROVIDER) {
        require('../provider/redis')
    } else if (providerType === AWS_PROVIDER) {
        require('../provider/aws')
    }else {
		logger.error("Cannot Create Provider")
		throw new Error("Invalid Provider Specified '" + providerType + "'");
	}
}


module.exports = create
