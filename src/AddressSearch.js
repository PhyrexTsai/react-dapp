import React, { Component } from 'react'
import EthUtil from 'ethereumjs-util'
import AddressBalance from './AddressBalance'
import PropTypes from 'prop-types'

type Props = {
  initAddress: string,
}

class AddressSearch extends Component {
  state: {
    address: string,
    balance: string,
  }

  constructor(props: Props) {
    // super是呼叫上層父類別的建構式
    super(props)

    // 設定初始的狀態。注意！這裡有個反樣式，不要用props的值來設定state的初始值
    this.state = {
      address: "0x7c20badacd20f09f972013008b5e5dae82670c8d",
      balance: "0"
    }
  }

  componentDidMount() {
    // 元件"已經"載入，所以可以載入資料進來
    this.handleAddressBalanceLoad()
  }

  handleAddressBalanceLoad = () => {
    const payload = {
      "jsonrpc": "2.0", 
      "id": 1, 
      "method": "eth_getBalance", 
      "params": [
        this.state.address, 
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
        console.log(this.state.address);
        console.log(result);
        const _balance = result.result//EthUtil.toBuffer(result.result)
        const balance = Object.assign(_balance)
        //載入資料，重新渲染
        this.setState({
          "balance": _balance,
        })
      })
      .catch((error) => {
        //這裡可以顯示一些訊息
        console.error("error:", error)
        this.setState({
          "balance": "error"
        })
      })
  }

  handleChange = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({address: e.target.value})
    }
  }
      
  handleClick = (e: Event) => {
    // Flow會檢查必定要HTMLInputElement的物件才能有輸入值
    this.handleAddressBalanceLoad()
  }

  render() {
    return (
      <div>
        Address: 
        <input type="text"
          value={this.state.address}
          placeholder={this.props.initAddress}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Search</button>
        <AddressBalance balance={this.state.balance}/>
      </div>
    )
  }
}

AddressSearch.propTypes = {
  initAddress: PropTypes.string
}

export default AddressSearch
