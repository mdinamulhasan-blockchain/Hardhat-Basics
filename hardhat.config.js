
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("@nomiclabs/hardhat-waffle");


 const INFURA_URL = "https://ropsten.infura.io/v3/5a80acc9d0814d4c9334e75b33606801";
 
 const ROPSTEN_PRIVATE_KEY = "b634a45c2ad1b9113d37230d390a58637d548809b626f2d1dfdc0da3d720d138";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: INFURA_URL,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
