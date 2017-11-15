const pino = require('pino')
const yargs = require('yargs')
const argv = yargs
const pretty = pino.pretty()

pretty.pipe(process.stdout)
const logger = pino({
    name: 'webhook-tunnel',
    safe: true,
    level: 'DEBUG'
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
