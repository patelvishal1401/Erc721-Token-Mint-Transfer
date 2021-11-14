# Erc721-Token-Mint-Transfer
Deploy erc721 contract know as nft, with mint and transfer token



**Setup**

1. npm install truffle

2. Update .env file according to your settings

3. Compile and Deploy Contract

   git clone https://github.com/patelvishal1401/Erc721-Token-Mint-Transfer.git

   cd Erc721-Token-Mint-Transfer

   npm install

   truffle compile

   truffle migrate --network rinkeby (change network : matic, matictest)

4. Trasfer token ( set receivers account in scripts/transfer-token.js )

   truffle exec scripts/mint-nft.js --network rinkeby (change network : matic, matictest)

