/* eslint-disable global-require */
'use strict'
const pino = require('pino')
const pretty = pino.pretty()
const logLevel = process.env.LOG_LEVEL === undefined ? 'debug' : process.env.LOG_LEVEL

pretty.pipe(process.stdout)
const logger = pino({
    name: 'ParamPoll',
    safe: true,
    level: logLevel
}, pretty)

logger.debug('Initialising')
require('../provider/aws')
logger.debug('Done')
