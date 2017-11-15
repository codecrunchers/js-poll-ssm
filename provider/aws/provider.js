'use strict'
const config = require('../../config')
const store = require('../../src/store')
const aws = require('../../models/aws')
const logger = require('../../src/logger')

var params = {
    Name: '/apps/poll/ssm/THE_KEY',
    WithDecryption: true || false
};

const paramStorePoll = setInterval(() => {
    logger.debug('Fetching Key %s', params.Name)
    aws.getParameter(params, function(err, data) {
        if (err) {
            logger.error('Failed fetching key %s', err.stack); // an error occurred:
        } else {
            logger.debug('Key fetched from ParameterStore'); // an error occurred:
            store.set(params.Name, data.Parameter.Value)
        }
    })
}, 1500)
