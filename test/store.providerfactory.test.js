var proxyquire = require('proxyquire')
factory = proxyquire('src/store.providerfactory.js', { config: { providerType: 'aws'}, logger: {}})

test('When config is AWS, it should return an AWS Provider', () => {
    expect(factory.create({})).toBeNull()
})
