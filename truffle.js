// Allows us to use ES6 in our migrations and tests.
require('babel-register')

//contract.default({from: ...})

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    }
  }
}
