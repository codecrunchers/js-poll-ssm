'use strict'
var AWS = require('aws-sdk');
const config = require('../../config')

const aws_secure_config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: config.region
}



const client = new AWS.SSM(aws_secure_config)

module.exports = client
