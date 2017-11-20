'use strict'
const logger = require('logger')
const config = require('config')
const aws = require('models/aws')
var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;
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

    aws.getParametersByPath(awsParams, function(err, data) {
        if (err) {
            self.emit('error', err.stack); // an error occurred:
        } else {
            self.emit('update', data.Parameters)
        }
    })
}

module.exports = ParameterProvider
