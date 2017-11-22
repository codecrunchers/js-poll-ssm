'use strict'
const EMPTY_STRING = ""
const DEFAULT_TIMEOUT = 30000

const config = {
    providerType: process.env.PROVIDER_TYPE.trim(),
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID.trim(),
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY.trim(),
    region: process.env.AWS_REGION.trim(),
    pollTime: process.env.POLL_TIME === undefined ? DEFAULT_TIMEOUT : parseInt(process.env.POLL_TIME),
    keyPrefix: process.env.KEY_PREFIX === undefined ? EMPTY_STRING : process.env.KEY_PREFIX.trim(),
    keyPrefixGlobal: process.env.KEY_PREFIX_GLOBAL === undefined ? EMPTY_STRING : process.env.KEY_PREFIX_GLOBAL.trim()
}
module.exports = config
