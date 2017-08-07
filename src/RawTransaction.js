import React from 'react'
import Tx from 'ethereumjs-tx'
import Abi from 'ethereumjs-abi'

class RawTransaction extends React.Component {
  state: {
    privateKey: string,
    ether: number,
    rawTransaction: string,
  }

  constructor(props: Props) {
    // super是呼叫上層父類別的建構式
    super(props)

    // 設定初始的狀態。注意！這裡有個反樣式，不要用props的值來設定state的初始值
    this.state = {
      privateKey: props.privateKey,
      ether: 0,
      rawTransaction: "",
    }
  }

  handleNumber = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ether: e.target.value})
    }
  }

  handleRawTransaction = (e: Event) => {
    console.log("props", this.props.privateKey);
    const privKey = new Buffer(this.props.privateKey.substring(2), 'hex')
    console.log(privKey)
    const encodeData = "0x" + Abi.methodID("", []).toString("hex")
    
    /**
     * nonce: 在 Ethereum 中為避免交易雙花, 所以透過 nonce 紀錄帳號地址過去送的交易, 可看作流水號 (Seq#).
     *        使用 web3.eth.getTransactionCount(account) 
     *        可取得下一次當帳號要送交易時, 需要的 nonce, 另外 nonce 具備連續性, 否則會報錯.
     *        https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactioncount
     * 
     * gasPrice: web3.toHex(2000000000) 大概是 20 gwei
     *           https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gasprice
     * 
     * gasLimit: 一般交易使用 21000 gas，其他交易要使用 web3.eth.estmateGas();
     *           https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gasprice
     * 
     * value: web3.toHex(web3.toWei(25, 'ether'))
     * data: 單純送錢就留空
     */
    const rawTx = {
      nonce: '0x00',
      gasPrice: '0x09184e72a000', 
      gasLimit: '0x2710',
      to: '0x0000000000000000000000000000000000000000', 
      value: '0x00', 
      data: ''//encodeData
    }

    const tx = new Tx(rawTx)
    tx.sign(privKey)

    const serializedTx = tx.serialize()
    console.log(serializedTx.toString('hex'))

    // 呼叫 sendRawTransaction('0x' + tx.serialize().toString('hex'))

    this.setState({
      rawTransaction: serializedTx.toString('hex')
    })
  }

  render() {
    return (
      <div>
        <input type="number" placeholder="0" onChange={this.handleNumber}/>
        <button onClick={this.handleRawTransaction}>GET RAW TRANSACTION</button>
        <h3>{this.state.rawTransaction}</h3>
      </div>
    )
  }

}

// 加入props的資料類型驗証
RawTransaction.propTypes = {
  privateKey: React.PropTypes.string
}

// 匯出TextShow模組
export default RawTransaction