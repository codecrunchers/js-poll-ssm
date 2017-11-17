/* eslint-disable global-require */
'use strict'
const REDIS_PROVIDER = 'redis'
const AWS_PROVIDER = 'aws'


function ProviderFactory(options) {
    var logger
    var config

    if (!options.logger || !options.config) {
        throw new Error("Pass both a logger and config object")
    }

    logger = options.logger
    config = options.config
    const providerType = config.providerType.toLowerCase()


    return {
        create: function() {
            logger.debug({
                obj: providerType
            }, 'Initialising Provider')

            if (providerType === REDIS_PROVIDER) {
                require('../provider/redis')
            } else if (providerType === AWS_PROVIDER) {
				require('../provider/aws')({
					config:config,
					logger:logger
				})
			} else {
                logger.error("Cannot Create Provider")
                throw new Error("Invalid Provider Specified '" + providerType + "'");
            }
        }
	}   
}
module.exports = ProviderFactory
