const MewToken = artifacts.require("MewToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  await deployer.deploy(Timelock, "0xfb86EB17fC619D7cA575dA633e117eD3eB5F725f", 21600);
};
