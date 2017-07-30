import React, { Component } from 'react'
import PrivateKey from './PrivateKey'

class Upload extends React.Component {
  state: {
    privateKey: string,
  }

  // 建構式
  constructor(props: Props) {
    // super是呼叫上層父類別的建構式
    super(props)

    // 設定初始的狀態。注意！這裡有個反樣式，不要用props的值來設定state的初始值
    this.state = {
      privateKey: '',
    }
  }

  handleChange = (e: Event) => {
    // Flow會檢查必定要HTMLInputElement的物件才能有輸入值
    console.log(e);
    if (e.target instanceof HTMLInputElement) {
      const file = e.target.files[0]
      let reader = new FileReader()
      let react = this;
      reader.onload = (function(file){
        return function(event){
          const base64data = event.target.result.split(",")[1];
          const privateKey = atob(base64data);
          react.setState({
            privateKey,
          })
        };
      })(file);
      reader.readAsDataURL(file)
    }
  }

  render() {
    return (
      <div>
        <input type="file"
          onChange={this.handleChange}
        />
        <PrivateKey text={this.state.privateKey}/>
      </div>
    )
  }

}

export default Upload