/* eslint-env jest */

jest.mock('config')
const ParamProvider = require('src/store.providerfactory.js').create({})

describe('#create()', () => {
    it('should return null for anything but aws|redis', () => {
        expect(ParamProvider()).toBeNull
    })
})
