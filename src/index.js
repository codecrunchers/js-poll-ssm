'use strict'
require('./store.providerfactory.js')
const store = require('./store.js')
setTimeout(()=>{
    console.log('\r\n->'+store.get('THE_KEY'))
}, 10000)
module.exports.store = store
