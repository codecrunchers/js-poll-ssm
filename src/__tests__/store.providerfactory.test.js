/* eslint-env jest */

//jest.mock('logger')
jest.dontMock('src/store.providerfactory.js');


describe('#create()', () => {
    beforeEach(() => {
        jest.resetModules();

    });

    it('should return an AWS object for \'aws\'', () => {
        expect(
            () => {
                jest.setMock('config', {
                    providerType: 'asdasdasdasadsasd'
                })
				null
            }).not.toBeNull()
    })


    it('should return null for anything but aws|redis', () => {
        expect(
            () => {
                let config = jest.mock('config')
                var r = require('src/store.providerfactory.js').create({})
            }).toThrowError('Invalid Provider Specified: none');
    })

})
