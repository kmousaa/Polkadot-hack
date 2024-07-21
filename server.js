const addr = "5FH3upkbzSSwUAeK1Mk1pswbLYuwpDTVMorRTnyiFwB3F24c"

const express = require('express');
const app = express();
const port = 3001;

const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const { ContractPromise, CodePromise } = require('@polkadot/api-contract');
const { Contract } = require('@polkadot/api-contract/base');

async function main() {
  const wsProvider = new WsProvider('wss://moonbase-alpha.public.blastapi.io');

  const api = await ApiPromise.create({ provider: wsProvider });

  await api.isReady;

  console.log(api.genesisHash.toHex());

  const now = await api.query.timestamp.now();

  const { nonce, data: balance } = await api.query.system.account(addr);

  console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);

  const abi = require('./abi.json');
  const contractAddress = '0xf163c1381610cff1ec2d71d6e23fd4e22f2a5a3b';

  const contract = new Contract(api, abi, contractAddress);

  console.log("lsdfsdf")

  // Create a keyring instance and add your account
  const keyring = new Keyring({ type: 'sr25519' });
  const alice = keyring.addFromSeed('a788d1aadec558aef2c884d2b6bbcbfb2aa955cab3917fe1a061ff3a7cadac78'); // or your private key or mnemonic

  // Estimate gas limit
  const gasLimit = await api.rpc.contracts.call(contractAddress, {
    value: 0,
    gasLimit: -1,
    inputData: contract.abi.findMessage('createTask').toU8a(...args),
  });

  const args = ["hello", "0x13f791cd8E7fEE9d870Fe80978a073C268732278", ["a"], 10]

  // Send the transaction
  const tx = contract.tx.yourFunctionName(
    {
      gasLimit,
      value: 0, // or the value you want to send
    },
    ...args
  );

  const unsub = await tx.signAndSend(alice, (result) => {
    if (result.status.isInBlock) {
      console.log('Transaction included in block:', result.status.asInBlock);
      unsub();
    } else if (result.status.isFinalized) {
      console.log('Transaction finalized:', result.status.asFinalized);
      unsub();
    }
  });
}

// Define a route handler for the default home page
app.get('/', (req, res) => {
  main();
  res.json('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
