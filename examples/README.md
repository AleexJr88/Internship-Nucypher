# Basic Nodejs example

## How to use


### SET ENV Variables
``` 
export PRIVATE_KEY="75d1cf7145b3edd34048d49d333f072f8df1431ed14b63d1bb2f3fab0605df37" // A sample private key prefix with `0x`
export FROM="0xb5604798a004E058103e5EC8492230534Aca9e73" // Your address 
```

Be careful with your private key, Use a  key your are comfortable with for development purpose.

### Install and run:

```bash
cd .. // make sure you are on matic.js directory
npm run build && node examples/balance-of-ERC20.js
