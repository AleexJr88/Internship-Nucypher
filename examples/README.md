# Nucypher-TFG
Hi I'm Alex 👋 and I'm finishing my computer engineering degree at the University of Malaga.

The Nucypher-TFG repository will focus on my project of the University Extension Course in Blockchain Technologies organized by the University of Malaga.

The Objectives of the work plan are those that appear in the pdf with the same name. 

For phase 1, I have used the matic js github repository to be able to perform the necessary functions (burn and exit)

The commands required for this phase were:

1. node examples/pos/erc20/withdraw_start.js

This first function allows us to withdraw the erc20 tokens from polygon. After about 5-10 minutes we execute the second command:

2. node examples/pos/erc20/withdraw_exit.js

This second function will allow us to see reflected what we have sent from polygon to goerli. In the function withdraw_exit.js we change the hash of the transaction that appears for the one that we have generated when executing the function 1.

Important things:

1. Have MATIC available and DERC20 token from the polygon network

2. Have ETH available from the goerli network

Faucet MATIC: https://faucet.polygon.technology/

ETH faucet: https://faucets.chain.link/goerli

For phase 2, we have made a smart contract in remix that is located in: examples/pos/erc20/contracts

This agreement has the necessary methods to be able to accept payments and to withdraw those funds to the administrator's account.

Once the funds are in the administrator's account, we could make use of the bridge by calling the functions that we used in phase 1.

Another option is to use the bridge by directly withdrawing all the funds from the contract without having to send the funds to the administrator's polygon account and then using the bridge.
