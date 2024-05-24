# My Token
This Project is basically have a contract of Token in which we can mint or burn token at different addresses according to our convenience . Program is written in Solidity version >=0.8.2 and have 3 public variables and 2 helper functions and a mapping  which maps the address to total supply present at that address.

## Description
So, as mentioned before code has 3 public variables and 2 helper functions now get its depth and know how the code is working.
The 3 public variables contain Name of Token , Abbrevation of Token and lastly Total Supply available for Token. After that we have a mapping  which maps the address to total supply present at that address. Mint Function take two parameters as input first is the address and the other is Token Supply which we want to add. Last Burn Function also have two parameters as input first is address and second is Token_Burn the Token which we wnat to remove or burn also Burn Function have a condition if total supply presesnt at particular address is greater or equal to Token_Burn then only the Tokens are burn else Nothing is updated.

## Getting Started

For the execution of our code we will be using remix IDE , https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js

After opening the remix IDE create a new .sol file and start writing the project code.

### Executing program

```
code blocks for commands

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2;

contract MyToken {

    // public variables
    string public Token_Name = "Ether";
    string public Token_Abbrv = "ETH";
    uint public Token_Total_Supply = 0;

    // mapping variable here
    mapping (address => uint) public Token_Balance_Mapping;

    // mint function
    function mint(address Token_Address, uint Token_Supply) public {
        Token_Total_Supply += Token_Supply;
        Token_Balance_Mapping[Token_Address] += Token_Supply;
    }

    // burn function
    function burn(address Token_Address, uint Token_Burn) public {
        if(Token_Balance_Mapping[Token_Address] >= Token_Burn){
            Token_Total_Supply -= Token_Burn;
            Token_Balance_Mapping[Token_Address] -= Token_Burn;
        }
    }

}
```

