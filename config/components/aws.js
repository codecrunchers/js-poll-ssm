'use strict'
const EMPTY_STRING = ""
const DEFAULT_TIMEOUT = 30000

const config = {
    providerType: process.env.PROVIDER_TYPE,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    pollTime: process.env.POLL_TIME === undefined ? DEFAULT_TIMEOUT : parseInt(process.env.POLL_TIME),
    keyPrefix: process.env.KEY_PREFIX === undefined ? EMPTY_STRING : process.env.KEY_PREFIX,
    keyPrefixGlobal: process.env.KEY_PREFIX_GLOBAL === undefined ? EMPTY_STRING : process.env.KEY_PREFIX_GLOBAL
}
module.exports = config
