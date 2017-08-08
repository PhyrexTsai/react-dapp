import React, { Component } from 'react'
import EthUtil from 'ethereumjs-util'

class BlockNumber extends Component {
  state: {
    blockNumber: string,
  }

  constructor(props: Props) {
    // super是呼叫上層父類別的建構式
    super(props)

    // 設定初始的狀態。注意！這裡有個反樣式，不要用props的值來設定state的初始值
    this.state = {
      blockNumber: "0",
    }
  }

  componentDidMount() {
    // 元件"已經"載入，所以可以載入資料進來
    this.handleBlockNumberLoad()
  }

  handleBlockNumberLoad = () => {
    const payload = {
      jsonrpc: "2.0",
      id: 1,
      method: "eth_blockNumber",
      params: []
    }

    fetch('https://ropsten.infura.io/YJ5zuNbAkmYQY3kFn4cZ', {
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
        const _blockNumber = EthUtil.bufferToInt(result.result) + ""
        const blockNumber = Object.assign(_blockNumber)
        //載入資料，重新渲染
        this.setState({
          blockNumber,
        })
      })
      .catch((error) => {
        //這裡可以顯示一些訊息
        console.error("error:", error)
      })
  }

  render() {
    return <h1>Block number: {this.state.blockNumber}</h1>
  }
}

export default BlockNumber
