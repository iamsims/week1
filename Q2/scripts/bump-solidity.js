const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

content = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped);

content = fs.readFileSync("./contracts/_plonkMultiplier3Verifier.sol", { encoding: 'utf-8' });
bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract _plonkMultiplier3Verifier');

fs.writeFileSync("./contracts/_plonkMultiplier3Verifier.sol", bumped);

