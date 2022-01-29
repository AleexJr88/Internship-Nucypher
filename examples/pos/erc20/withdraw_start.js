const { pos } = require('../../config');
const { getPOSClient, from } = require('../../utils');


const execute = async () => {
  
  const client = await getPOSClient();
  const erc20Token = client.erc20(pos.child.erc20);

  
  const result = await erc20Token.withdrawStart(10); //modificar el 10 por la cantidad total del contrato 

  const txHash = await result.getTransactionHash();
  console.log("txHash", txHash);
  const receipt = await result.getReceipt();
  console.log("receipt", receipt);

}
execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
})