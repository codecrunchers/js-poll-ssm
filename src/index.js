'use strict'
const pino = require('pino')
const yargs = require('yargs')
const argv = yargs
const pretty = pino.pretty()
const logLevel = process.env.LOG_LEVEL

pretty.pipe(process.stdout)
const logger = pino({
    name: 'webhook-tunnel',
    safe: true,
    level: logLevel
}, pretty)

logger.debug({
    runtime: process.argv[0],
    script: process.argv[1],
    arguments: argv
}, 'Initialising')

const pollSsm = require('./pollSsm')

try {
    pollSsm('test', 10)
} catch (err) {
    logger.error(err, 'Polling of SSM Failed')
}
