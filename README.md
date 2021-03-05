# Mew Finance

https://mewdefi.com Feel free to read the code. More details coming soon.

## Deployment

### ENV Variables
Create a `.env` file with the following content:
```
BSC_MAINNET_PRIVATE_KEY = <private_key>
BSC_TESTNET_PRIVATE_KEY = <private_key>
BSC_API_KEY = <bscscan_api_key>
```

### Deploy Contracts
- Mainnet
```sh
make deploy
```
- Testnet
```sh
make test-deploy
```
- Mainnet reset
```sh
make deploy-force
```
- Testnet reset
```sh
make test-deploy-force
```

- deploy MewToken
- deploy MasterChefV2
- deploy Timelock
- mint MewToken
- transfer ownership of MewToken to MasterChefV2

### Verify Contracts
- Mainnet
```sh
make verify
```
- Testnet
```sh
make test-verify
```

### Add Pools to MasterChefV2
- Mainnet
```sh
make console
```
- Testnet
```sh
make test-console
```

```js
let chef = await MasterChefV2.deployed();
chef.add(uint256 _allocPoint, IBEP20 _lpToken, uint16 _depositFeeBP, bool _withUpdate);
```

depositFeeBP: 100 = 1%, 10000 = 100%

- add LP and Token pools to MasterChefV2 - https://github.com/MewDefi/mew-contracts/wiki/Pools

### Transfer MasterChefV2
- transfer ownership of MasterChefV2 to Timelock
- Mainnet
```sh
make console
```
- Testnet
```sh
make test-console
```

```js
let chef = await MasterChefV2.deployed();
let time = await Timelock.deployed();
chef.transferOwnership(time.address);
```
