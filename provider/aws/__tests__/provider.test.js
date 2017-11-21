/* eslint-env jest */


describe('AWS-Provider', () => {

    test('An Event is Fired', () => {
        process.env.PROVIDER_TYPE = 'aws'
        var Provider = require('provider/aws')
        var x = null


        return Provider().then(data => {
            provideInstance.on('error', () => {
                x = '123'
            })
            provideInstance.on('update', () => {
                x = '123'
            })

            expect(data).toBe('peanut butter');
        });
    });

})
