require('dotenv').config();
require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = process.env['mnemonic'];
const infura = process.env['infura'];
const private_key = process.env['PRIVATE_KEY'];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "5777" // Match any network id
    },
    
  rinkeby: {
        provider: () => new HDWalletProvider(mnemonic, infura),
        network_id: 4,       // Ropsten's id
        gas: 5500000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
  matic: {
        provider: () => new HDWalletProvider(private_key, `https://rpc-mainnet.maticvigil.com/`),
        network_id: 137,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },
  matictest: {
        provider: () => new HDWalletProvider(private_key, `https://rpc-mumbai.maticvigil.com/`),
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },
      
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
