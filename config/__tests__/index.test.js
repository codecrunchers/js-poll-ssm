/* eslint-env jest */

describe('Get-Config', () => {

    beforeEach(() => {
        jest.resetModules();
		process.env.NODE_ENV = ''
    })

	it('should load a local .env file if we set the NODE_ENV var to dev', () => {
		process.env.NODE_ENV = 'development'
		expect(require('config').isLocal).toBeTruthy()
	})

	it('should load a Env Vars with defaults otherwise', () => {
		process.env.NODE_ENV = 'test'
		process.env.PROVIDER_TYPE = 'aws'
		var awsConfig = require('config')
		expect(awsConfig.aws.pollTime).toEqual(30000)
	})



})
    
	

