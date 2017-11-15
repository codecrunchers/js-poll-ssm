'use strict'
var AWS = require('aws-sdk');
const config = require('../../config')

const aws_secure_config = {
    accessKeyId: config.aws.aws_access_key_id,
    secretAccessKey: config.aws.aws_access_key_id,
    region: config.aws.region,
    pollTime: config.aws.pollTime,
    keyPrefix: config.aws.keyPrefix,
    keyPrefixGlobal: config.aws.keyPrefixGlobal
}

const client = new AWS.SSM(aws_secure_config)

module.exports = client
