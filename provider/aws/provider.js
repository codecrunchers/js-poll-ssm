'use strict'
const config = require('../../config')
const logger = require('../../logger')
const aws = require('../../models/aws')

//The Keys we are searching for
const awsParams = {
    Path: config.keyPrefix,
    WithDecryption: true || false
};

function ParameterProvider() {
    if (!(this instanceof ParameterProvider)) return new ParameterProvider();
    this._started = false;
}


ParameterProvider.prototype.start = function start() {
    var self = this
    if (self._started) return
    self._started = true

    self._pollInterval = setInterval(() => self.poll(), parseInt(config.pollTime))
    logger.debug('Started Polling..@' + config.pollTime)
}


ParameterProvider.prototype.stop = function stop() {
    clearInterval(this._pollInterval)
    this._started = false;
}

ParameterProvider.prototype.poll = function poll() {
    var self = this
    FetchParameters().then(
        data => {
            process.send({
                    'status': 'success',
                    'data': data
                })
        },
        err => {
            logger.error("Error fetching data from AWS", err)
            process.send({
                status: 'error',
                'data': err
            })
        }
    )
}


function FetchParameters() {
    return new Promise((resolve, reject) => {
        aws.getParametersByPath(awsParams, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data.Parameters)
            }
        })
    })
}

module.exports = ParameterProvider
