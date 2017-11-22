'use strict'
var cluster = require('cluster')
const logger = require('../logger')
const paramStore = require('../store')

if (cluster.isMaster) {
    logger.info('Spawning Child Process for Param Fetching')

    var worker = cluster.fork()

    worker.on('message', function(message) {
        logger.debug('Incoming from spawne process:', message)
        paramStore.set(message)
    });

    cluster.on('online', function(_worker) {
        logger.info(_worker, 'Worker is online');
    });

    cluster.on('exit', function(_worker, code, signal) {
        logger.debug('Worker ' + _worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    });

} else {
    var ParamProvider = require('./store.providerfactory.js').create({})
    ParamProvider.start()
}
