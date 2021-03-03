const MewToken = artifacts.require("MewToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let mew = await MewToken.deployed()
  await deployer.deploy(MasterChefV2, mew.address, "0x8505fc38A44fd358De4752B18f012bDF2f59E797", "0x6A906FEA7a0d05d46e4De29d59933D65D1c31E96", "1000000000000000000", 0);
};
