//import {MaticPOSClient} from '@maticnetwork/maticjs';
const MaticPOSClient = require('@maticnetwork/maticjs').MaticPOSClient;
/*

import HDWalletProvider from '@truffle/hdwallet-provider';
import { readFileSync } from 'fs';
const mnemonic = readFileSync(".secret").toString().trim();


const maticPOSClient = new MaticPOSClient({
    network: "testnet",
    version: "mumbai",
    parentProvider: new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'),
    maticProvider: new HDWalletProvider(mnemonic, 'https://rpc-mumbai.maticvigil.com/'),
  });


//APPROVE

//await maticPOSClient.approveERC20ForDeposit('0xf974263F93C3e026784d18426494Ff7f7BB4Cb77', '5000000000000000');

//DEPOSIT

//await maticPOSClient.depositERC20ForUser('0xf974263F93C3e026784d18426494Ff7f7BB4Cb77', '0xf974263F93C3e026784d18426494Ff7f7BB4Cb77', '5000000000000000', {
  //from,
  //gasPrice: "10000000000",
//});

//BURN

const execute = async () => {
  const childToken = '0x9c3c9283d3e44854697cd22d3faa240cfb032889';

  try {
    const tx = await maticPOSClient.burnERC20(childToken, '5000000000000000', {from: '0xf974263F93C3e026784d18426494Ff7f7BB4Cb77'});
    console.log(tx.transactionHash)
  }catch(e){
    console.error(e)
  }
}

execute().then(() => process.exit(0))

//EXIT
//const burnTxHash = "0xbadbf10"
//await maticPOSClient.exitERC20(burnTxHash);

*/