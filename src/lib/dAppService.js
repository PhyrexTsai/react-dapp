const Web3 = require('web3');
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/YJ5zuNbAkmYQY3kFn4cZ'));

const execFetch = async (url, payload) => {
  const res = await fetch(url, {
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

export const getBlockNumber = () => {
  return web3.eth.blockNumber;
};

export const getAddressBalanceLoad = (address) => {
  return web3.fromWei(web3.eth.getBalance(address), "ether").toString(10);
};