/* eslint-env jest */

describe('Load-Model', () => {

    beforeEach(() => {
        jest.resetModules();
		process.env.PROVIDER_TYPE = 'aws'

    })

	it('should load an AWS Model', () => {
		var AWS = require('aws-sdk');
		expect(require('models/aws')).toBeInstanceOf(AWS.SSM)
	})

})
