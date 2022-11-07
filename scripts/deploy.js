const hre = require("hardhat");

async function main() {
  const TenChat = await hre.ethers.getContractFactory("TenChat");
  const tenChat = await TenChat.deploy();

  await TenChat.deployed();

  console.log(` Contract Address: ${TenChat.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
