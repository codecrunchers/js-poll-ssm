const config = require('../../config')
const logger = require('../../logger')
const aws = require('../../models/aws')


module.exports = function() {
    var interval
    var started = false

    const awsParams = {
        Path: config.keyPrefix,
        WithDecryption: true || false
    }

    const poll = function() {
        fetchParameters().then(
            data => success(data),
            err => fail(err)
        )
    }
    const fail = function(err) {
        logger.error("Error fetching data from AWS", err)
        process.send({
            type: 'error',
            data: err
        })
    }
    const success = function(data) {
        process.send({
            type: 'success',
            data: data
        })
    }
    const fetchParameters = function() {
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

    return {
        start: function() {
            if (!this.started) {
                this.interval = setInterval(() => poll(), parseInt(config.pollTime))
                logger.debug('Started Polling..@' + config.pollTime)
            }
            this.started = true;
        },
        stop: function() {
            if (this.started) {
                clearInterval(this.interval)
                logger.debug('Stopped Polling')
            }
            this.started = false;
        }
    }
}
