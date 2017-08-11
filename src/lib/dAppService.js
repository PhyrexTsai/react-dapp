
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


export const getBlockNumber = async () => {
  const payload = getPayload(1, 'eth_blockNumber', []);
  const url = 'https://ropsten.infura.io/YJ5zuNbAkmYQY3kFn4cZ';
  return await execFetch(url, payload);
};