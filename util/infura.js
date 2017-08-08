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
  } catch (error) {
    console.log(`getGasPrice Error: ${error}`);
  }
};

const getEstimateGas = (data) => {
  try {
    const params = [{data}];
    const payload = getPayload(73, 'eth_gasPrice', params);
    const result = await execFetch(payload);
    console.log(`getEstimateGas result: ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    console.log(`getEstimateGas Error: ${error}`);
  }
};

//not flow order
getTransactionCount("7c20badacd20f09f972013008b5e5dae82670c8d");
getGasPrice();
