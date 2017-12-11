const SafeMath = artifacts.require('./SafeMath.sol');
const ERC20Basic = artifacts.require('./ERC20Basic.sol');
const BasicToken = artifacts.require('./BasicToken.sol');
const ERC20 = artifacts.require('./ERC20.sol');
const StandardToken = artifacts.require('./StandardToken.sol');
const PvaToken = artifacts.require('./PvaToken.sol');

module.exports = (deployer) => {
    deployer.deploy(SafeMath);
    deployer.deploy(ERC20Basic);

    deployer.link(ERC20Basic, BasicToken);
    deployer.link(SafeMath, BasicToken);

    deployer.deploy(BasicToken);


    deployer.link(ERC20Basic, ERC20);
    deployer.deploy(ERC20);

    deployer.link(BasicToken, StandardToken);
    deployer.link(ERC20, StandardToken);
    deployer.deploy(StandardToken);

    deployer.link(StandardToken, PvaToken);
    deployer.deploy(PvaToken);


};
