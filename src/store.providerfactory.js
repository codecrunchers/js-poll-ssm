/* eslint-disable global-require */
'use strict'
const aws = require('../provider/aws')
const config = require('../config')
const logger = require('../logger')
const providerType = config.providerType.toLowerCase()

module.exports = {
    create: function () {
        try {
            logger.debug('Initialising Provider:', providerType)
            return aws
        } catch (e) {
            logger.error('Fatal: ', e)
            throw new Error('Invalid Provider Specified: ' + providerType)
        }
    }
}
