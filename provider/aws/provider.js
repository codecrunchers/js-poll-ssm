'use strict'
const aws = require('../../models/aws')
const config = require('../../config')
const store = require('../../src/store')
const logger = require('../../src/logger')

var params = {
    Path: config.keyPrefix,
    WithDecryption: true || false
};

logger.info({
    obj: config.pollTime
}, 'Poll Interval Set To:')

function pollFunc() {
    logger.info('Polling..')

    aws.getParametersByPath(params, function(err, data) {
        if (err) {
            logger.error('Failed fetching key %s', err.stack); // an error occurred:
        } else {
            logger.debug(data, 'Key fetched from ParameterStore'); // an error occurred:
            store.set(data.Parameters)
        }
    })
}

pollFunc()
const paramStorePoll = setInterval(() => pollFunc(), config.pollTime)
