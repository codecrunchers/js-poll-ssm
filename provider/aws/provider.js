const config = require('../../config')
const logger = require('../../logger')
const aws = require('../../models/aws')


module.exports = () => {
    var _interval
    var started = false

    const awsParams = {
        Path: config.keyPrefix,
        WithDecryption: true || false
    }

    const poll = () => {
        fetchParameters().then(
            data => {
                success(data)
            },
            err => {
                fail(err)
            })
    }
    const fail = function(err) {
        logger.error("Error fetching data from AWS", err)
        process.send({
            'type': 'error',
            'data': err
        })
    }
    const success = function(data) {
        process.send({
            'type': 'success',
            'data': data
        })
    }
    const fetchParameters = () => {
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
            if (!started) {
                _interval = setInterval(() => poll(), parseInt(config.pollTime))
                logger.debug('Started Polling..@' + config.pollTime)
            }
            started = true;
        },
        stop: function() {
            if (started) {
                clearInterval(_interval)
                logger.debug('Stopped Polling')
            }
            started = false;
        }
    }
}
