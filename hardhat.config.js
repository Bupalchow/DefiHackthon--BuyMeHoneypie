require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
//add networks
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const TESTNET_URL=process.env.TESTNET_URL;
module.exports = {
  solidity: "0.8.17",
  networks: {
    DeployNetwork:{
      url: TESTNET_URL,
      accounts: [PRIVATE_KEY],
    }
  },
};
