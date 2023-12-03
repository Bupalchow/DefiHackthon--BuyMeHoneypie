const hre = require("hardhat");

async function main() {
  const honeypie = await hre.ethers.getContractFactory("HoneyPie");
  const contract = await honeypie.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
