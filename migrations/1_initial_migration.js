const NFT = artifacts.require("MyBATMASK");

module.exports = async function (deployer) {
       
    deployer.deploy(NFT)
   
};
