'use strict'
const AWS = require('aws-sdk');
const config = require('../../config')
const logger = require('../../logger')

const awsSecureConfig = {
    accessKeyId: config.awsAccessKeyId,
    secretAccessKey: config.awsSecretAccessKey,
    region: config.region
}
module.exports = new AWS.SSM(awsSecureConfig)
