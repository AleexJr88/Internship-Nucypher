const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()

const burnHash = '0x731a64c890c42b6c8e9bad0e069efc0884cfe62e65b2a5b5c6014ae06085d00a'

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC20(burnHash)
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))
