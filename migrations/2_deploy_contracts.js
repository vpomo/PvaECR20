var PvaToken = artifacts.require("./PvaToken.sol");
var StandartToken = artifacts.require("./zeppelin/token/StandardToken.sol");
var BasicToken = artifacts.require("./zeppelin/token/BasicToken.sol");
var ERC20 = artifacts.require("./zeppelin/token/ERC20.sol");
var ERC20Basic = artifacts.require("./zeppelin/token/ERC20Basic.sol");
var SafeMath = artifacts.require("./zeppelin/math/SafeMath.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, BasicToken);
  deployer.deploy(BasicToken);
  deployer.deploy(ERC20Basic);
  deployer.link(ERC20Basic, BasicToken);

//  deployer.deploy(BasicToken);
  deployer.link(BasicToken, StandartToken);
  deployer.deploy(ERC20);
  deployer.link(ERC20, StandartToken);

  deployer.deploy(StandartToken);
  deployer.link(StandartToken, PvaToken);
  deployer.deploy(PvaToken);
};
