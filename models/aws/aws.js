'use strict'
var AWS = require('aws-sdk');

function AWSProvider(options) {
    var config
    var logger

    if (!options.logger || !options.config) {
        throw new Error("Pass both a logger and config object")
    }

    logger = options.logger
    config = options.config

    const aws_secure_config = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: config.region
    }
    client = new AWS.SSM(aws_secure_config)


    return {
        client: function() {
            return client
        }
    }
}



module.exports = AWSProvider
