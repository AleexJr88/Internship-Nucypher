const { pos } = require('../../config');
const { getPOSClient, from } = require('../../utils');
const Contract = require('web3-eth-contract');
Contract.setProvider('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

var contract = new Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "derc20",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
], '0x56Acb8755d672E3CAA583943A68dE366A8408f77');

const execute = async () => {
  
  const client = await getPOSClient();
  const erc20Token = client.erc20(pos.child.erc20);
  
  //await contract.methods.withdraw();
  
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