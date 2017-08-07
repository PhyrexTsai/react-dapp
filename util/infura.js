"use strict";

function getTransactionCount(address) {
  const payload = {
    "jsonrpc": "2.0", 
    "id": 1, 
    "method": "eth_getTransactionCount", 
    "params": [
      address, 
      "latest"
    ]
  }
  fetch('https://ropsten.infura.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    //這裡可以顯示一些訊息
    console.error("error:", error)
  })
}

function getGasPrice() {
  const payload = {
    "jsonrpc": "2.0", 
    "id": 73, 
    "method": "eth_gasPrice", 
    "params": []
  }
  fetch('https://ropsten.infura.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    //這裡可以顯示一些訊息
    console.error("error:", error)
  })
}

function getEstimateGas(data) {
  const payload = {
    "jsonrpc": "2.0", 
    "id": 73, 
    "method": "eth_gasPrice", 
    "params": [{data}]
  }
  fetch('https://ropsten.infura.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    //這裡可以顯示一些訊息
    console.error("error:", error)
  })
}

getTransactionCount("7c20badacd20f09f972013008b5e5dae82670c8d");
