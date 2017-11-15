'use strict'
const pino = require('pino')
const pretty = pino.pretty()
const logLevel = process.env.LOG_LEVEL

pretty.pipe(process.stdout)
const logger = pino({
    name: 'pollSsm',
    safe: true,
    level: logLevel
}, pretty)

logger.debug('Initialising')
require('./pollSsm')
logger.debug('Done')
