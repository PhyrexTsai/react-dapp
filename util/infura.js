"use strict";

const fetch = require('node-fetch');

const target = 'https://ropsten.infura.io/';

const execFetch = async (payload) => {
  const res = await fetch(target, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw Error(res.statusText); 

  return  await res.json();
};

const getPayload = (id, method, params) => ({
  jsonrpc: '2.0', 
  id,
  method,
  params
});

const getTransactionCount = async (address) => {
  try {
    const params = [address, 'latest'];
    const payload = getPayload(1, 'eth_getTransactionCount', params);
    const result = await execFetch(payload);
    console.log(`getTransactionCount result: ${JSON.stringify(result)}`);
  } catch (error) {
    console.log(`getTransactionCount Error: ${error}`);
  }
};

const getGasPrice = async () => {
  try {
    const params = [];
    const payload = getPayload(73, 'eth_gasPrice', params);
    const result = await execFetch(payload);
    console.log(`getGasPrice result: ${JSON.stringify(result)}`);
    return result.result;
  } catch (error) {
    console.log(`getGasPrice Error: ${error}`);
  }
};

const getEstimateGas = async (data) => {
  try {
    const params = [data];
    const payload = getPayload(1, 'eth_estimateGas', params);
    const result = await execFetch(payload);
    console.log(`getEstimateGas result: ${JSON.stringify(result)}`);
  } catch (error) {
    console.log(`getEstimateGas Error: ${error}`);
  }
};

const sendRawTransaction = async(serializedTx) => {
  try {
    const params = [serializedTx];
    const payload = getPayload(1, 'eth_sendRawTransaction', params);
    const result = await execFetch(payload);
    console.log(`sendRawTransaction result: ${JSON.stringify(result)}`);
  } catch (error) {
    console.log(`sendRawTransaction Error: ${error}`);
  }
}

//not flow order
getTransactionCount("0x7c20badacd20f09f972013008b5e5dae82670c8d");
getGasPrice();

const rawTx = {
  "from":"0x7c20badacd20f09f972013008b5e5dae82670c8d",
  "to":"0xd6026ddc3a2be02a3577de714a98e24dc4a89dbf",
  "value":"0x22",
  "gasPrice":"0x737be7600",
  "gas":"0xffffff"
}

const estimateGas = getEstimateGas(rawTx);

const sendRawTx = {
  "from":"0x7c20badacd20f09f972013008b5e5dae82670c8d",
  "to":"0xd6026ddc3a2be02a3577de714a98e24dc4a89dbf",
  "value":"0x22",
  "gasPrice":"0x737be7600",
  "gas": "0x5209"
}

console.log(sendRawTx);

sendRawTransaction("0x" + "f86426850737be760082520994d6026ddc3a2be02a3577de714a98e24dc4a89dbf22801ba014c1c9c489a96540cfea6cb04173dabbab1a8ca182c5e36c2d63b9bbec13e8e7a07124b25b03019ebb163c0d6dc98b50aa3721340f8e7892cc9f0055b19501ea69");
