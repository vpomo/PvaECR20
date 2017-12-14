const PvaToken = artifacts.require('./SinglePvaToken.sol');

module.exports = (deployer) => {
    deployer.deploy(PvaToken);
};
