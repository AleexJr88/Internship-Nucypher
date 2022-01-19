const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()

const burnHash = '0x1e9e907cdbae37f0ee656c695c95adc7a2b624966c94f345bee0001f0fe44252'


const execute = async () => {
  try {
   const tx = await maticPOSClient.exitERC20(burnHash, {from: '0xf974263F93C3e026784d18426494Ff7f7BB4Cb77'} )
    /*console.log(tx.transactionHash) // eslint-disable-line
    //console.log(burnHash)
  */
 
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))
