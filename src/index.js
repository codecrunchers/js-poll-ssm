'use strict'
var cluster = require('cluster')
const logger = require('../logger')
const paramStore = require('../store')
var worker = null

if (cluster.isMaster) {
    logger.info('Spawning Child Process for Param Fetching')
    worker = cluster.fork()

    worker.on('message', function(message) {
        logger.debug('Incoming from spawned process:', message.type)
        if (message.type === 'success') {
            paramStore.set(message.data)
        } else {
            logger.error('cannot fetch data from remote param store, stopping child process')
            worker.send({
                type: 'shutdown'
            })
            worker.kill()
        }
    })

    cluster.on('online', function(_worker) {
        logger.debug('Worker is online:', _worker.id)
    })

    cluster.on('exit', function(_worker, code, signal) {
        logger.debug('Worker ' + _worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal)
    })
} else {
    let ParamProvider = (require('./store.providerfactory.js').create())
    let pp = ParamProvider()
    pp.start()

    process.on('message', function(message) {
        if (message.type === 'shutdown') {
            logger.debug('Initiating graceful shutdown for Worker:')
            pp.stop()
        }
    })
}

module.exports = {
    stop: function() {
        worker.send({
            type: 'shutdown'
        })
        worker.kill()
    }
}
