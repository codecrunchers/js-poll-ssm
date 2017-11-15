const pollSsm = require('../src/pollSsm')

test('It should return true', () => {
    expect(() => pollSsm('test-service', 10)).toBeFalsy()
})
