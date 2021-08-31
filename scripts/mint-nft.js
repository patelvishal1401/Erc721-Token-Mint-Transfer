const NFT = artifacts.require("MyBATMASK");

module.exports = async function (done) {

    const mdaToken = await NFT.deployed()
    
    const URI = "ipfs://Qme1DFccESqwBChAyo7PfLSaynuG2j21J2d46PTwvvm23i"
    const WALLET_ADDRESS = "0x45AdB2B996aF4146357E24Df6D52fdE1ba3e07AE"
    
    await mdaToken.mint(WALLET_ADDRESS,URI);
    
    done();

};
