const MewToken = artifacts.require("MewToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  await deployer.deploy(MewToken);
};
