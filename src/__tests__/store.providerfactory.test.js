/* eslint-env jest */

describe('#create() Store Provider Factory', () => {

    beforeEach(() => {
        jest.resetModules();

    })

    it('should return an EventEmitter object for \'aws\'', () => {
		var EventEmitter = require('events').EventEmitter;

        jest.setMock('config', {
            providerType: 'aws'
        })
        var r = require('src/store.providerfactory.js').create({})

        expect(r()).toBeInstanceOf(EventEmitter)
    })

    it('should throw an error for anything but aws|redis', () => {
        jest.setMock('config', {
            providerType: 'none'
        })

        expect(() => {
            require('src/store.providerfactory.js').create({})
        }).toThrowError('Invalid Provider Specified: none');
    })

})
