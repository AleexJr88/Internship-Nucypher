const { pos } = require('../config');
const { getPOSClient, from } = require('../utils');

const execute = async () => {
    const client = await getPOSClient();

    const result = await client.isCheckPointed('0xf18bd035686089db000687a0e13b641bdffa8f0ecbec5d8151812d665508f73a');

    console.log("result", result);
}
execute().then(() => {
}).catch(err => {
    console.error("err", err);
}).finally(_ => {
    process.exit(0);
})