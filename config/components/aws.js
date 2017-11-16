const EMPTY_STRING=""
const DEFAULT_TIMEOUT=30000
const config = {
    aws: {
        aws_access_key_id: process.env.AWS_ACCESS_KEY,
        aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        pollTime: process.env.POLL_TIME === undefined ? DEFAULT_TIMEOUT: parseInt(process.env.POLL_TIME),
        keyPrefix: process.env.KEY_PREFIX === undefined ? EMPTY_STRING : process.env.KEY_PREFIX,
        keyPrefixGlobal: process.env.GLOBAL_KEY_PREFIX === undefined ? EMPTY_STRING : process.env.KEY_PREFIX_GLOBAL
    }
}
module.exports = config
