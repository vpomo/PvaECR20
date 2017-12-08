pragma solidity ^0.4.11;


import "./zeppelin/token/StandardToken.sol";


/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 * A standard interface for tokens: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
 */
contract PvaToken is StandardToken {

  string public constant name = "PvaToken";
  string public constant symbol = "PVA";
  uint8 public constant decimals = 18;

  uint256 public constant INITIAL_SUPPLY = 20000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function SimpleToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}
