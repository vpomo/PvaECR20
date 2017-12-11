
module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '3' // Match any network id
        },
        coverage: {
            host: "localhost",
            network_id: "*",
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01
        }
    },
    mocha: {
        useColors: true,
        slow: 30000,
        bail: true
    }
};
