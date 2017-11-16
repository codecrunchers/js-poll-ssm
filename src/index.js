'use strict'
const logger = require('./logger')
const store = require('./store.js')
const createProvider = require('./store.providerfactory.js')

createProvider({})

setTimeout(() => {
    logger.debug({
            obj: store.get('THE_KEY')
        },
        'Retrieved THE_KEY')
}, 10000)
