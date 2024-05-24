# Beginning
So basically this Hello World! is the first program code as we start learning a new Programming Language. This file will introduce you with basic Solidity Language Syntax. This is the first step towards learning complex concepts.

## Description
In this simple program we are having a simple contract written in Solidity Programming Language. This program have a public string which have a string value which is "Hello World " . This is the first step towards learning complex concepts.

## Getting Started

### Executing program
For the execution of our code we will be using remix IDE ,
https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js

After opening the remix IDE create a new .sol file and start writing the first hello world code.


```javascript
// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;

contract helloworld{
    string public myString="Hello World";
}

```
After writing the code it's time to compile it. So, press Ctrl + S to compile your code or click on Solidity comipler and then click on
Compile helloworld.sol . Now it's time to deploy click on deploy and run transction just below Solidity compiler and deploy .
After deployment we can check the value in myString variable which must be "Hello World".

### Thanks for reading 
Start your Coding journey in Solidity Programming Language !!!!

