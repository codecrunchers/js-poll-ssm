'use strict'
const logger = require('logger')
const config = require('config')
const aws = require('models/aws')
var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;

//The Keys we are searching for
const awsParams = {
    Path: config.keyPrefix,
    WithDecryption: true || false
};

function ParameterProvider() {
    if (!(this instanceof ParameterProvider)) return new ParameterProvider();
    this._started = false;
    EventEmitter.call(this);
}

inherits(ParameterProvider, EventEmitter)

ParameterProvider.prototype.start = function start() {
    logger.debug('Starting Parameter Poll')
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
            self.emit('update', data)
        },
        err => {
            self.emit('error', err)
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
