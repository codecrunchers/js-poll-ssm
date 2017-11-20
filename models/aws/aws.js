'use strict'
const logger = require('logger')
const config = require('config')
var AWS = require('aws-sdk');

const aws_secure_config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: config.region
}
module.exports = new AWS.SSM(aws_secure_config)
