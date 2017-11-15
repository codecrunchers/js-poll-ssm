'use strict'
const config = require('../../config')
const store = require('../../src/store')
const aws = require('../../models/aws')
const logger = require('../../src/logger')

var params = {
    Name: '/apps/poll/ssm/THE_KEY',
    WithDecryption: true || false
};

logger.debug('Fetching Key %s', params.Name)

aws.getParameter(params, function(err, data) {
    if (err) {
        logger.error('Faile fetching key %s', err.stack); // an error occurred:
    } else {
        logger.debug('Key fetched from AWS SSM'); // an error occurred:
        store.set(params.Name, data.Parameter.Value)
    }
});
