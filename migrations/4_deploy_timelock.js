const MewToken = artifacts.require("MewToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  await deployer.deploy(Timelock, "0x8505fc38A44fd358De4752B18f012bDF2f59E797", 21600);
};
