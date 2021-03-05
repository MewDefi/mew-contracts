const MewToken = artifacts.require("MewToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let mew = await MewToken.deployed();
  let chef = await MasterChefV2.deployed();

  await mew.mint("50000000000000000000000");
  await mew.transferOwnership(chef.address);
};
