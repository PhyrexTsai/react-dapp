import React, { Component } from 'react'
import PrivateKey from './PrivateKey'
import EthWallet from 'ethereumjs-wallet'

class Upload extends React.Component {
  state: {
    privateKey: string,
    keystore: string,
    passphrase: string,
  }

  // 建構式
  constructor(props: Props) {
    // super是呼叫上層父類別的建構式
    super(props)

    // 設定初始的狀態。注意！這裡有個反樣式，不要用props的值來設定state的初始值
    this.state = {
      privateKey: '',
      keystore: '',
      passphrase: '',
    }
  }

  handleUpload = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      const file = e.target.files[0]
      let reader = new FileReader()
      let react = this;
      reader.onload = (function(file){
        return function(event){
          const base64data = event.target.result.split(",")[1];
          const json = atob(base64data);

          // using ehtereumjs-wallet to private key
          const wallet = EthWallet.fromV3(json, "OGRiMDdmNmU1YmUwNGUzODA0ODQ4MTc2", true);
          const privateKey = wallet.getPrivateKeyString();
          // 可以比對 MyEtherWallet -> View Wallet Info

          react.setState({
            "keystore": json,
          })
          
        };
      })(file);
      reader.readAsDataURL(file)
    }
  }

  handlePassphrase = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({passphrase: e.target.value})
    }
  }

  handleChange = (e: Event) => {
    // Flow會檢查必定要HTMLInputElement的物件才能有輸入值
    const wallet = EthWallet.fromV3(this.state.keystore, this.state.passphrase, true)
    const privateKey = wallet.getPrivateKeyString()
    this.setState({
      privateKey,
    })
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleUpload}/>
        <input type="text" placeholder="passphrase" onChange={this.handlePassphrase}/>
        <button onClick={this.handleChange}>SUBMIT</button>
        <PrivateKey text={this.state.privateKey}/>
      </div>
    )
  }

}

export default Upload