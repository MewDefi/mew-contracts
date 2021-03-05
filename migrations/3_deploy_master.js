const MewToken = artifacts.require("MewToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let mew = await MewToken.deployed()
  await deployer.deploy(MasterChefV2, mew.address, "0xfb86EB17fC619D7cA575dA633e117eD3eB5F725f", "0x411325DCce3ad0FD2E86fdbcba9950eE3932F6B2", "1000000000000000000", 0);
};
