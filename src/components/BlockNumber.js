import React, { Component } from 'react'
import EthUtil from 'ethereumjs-util'
import {getBlockNumber} from '../lib/dAppService';

class BlockNumber extends Component {
  state = {
    blockNumber: '0'
  };

  componentDidMount() {
    this.handleBlockNumberLoad();
  }

  handleBlockNumberLoad = async () => {
    try {
      const res = await getBlockNumber();
      const blockNumber = EthUtil.bufferToInt(res.result);
      this.setState({ blockNumber });
    } catch (error) {
      console.log(`getBlockNumber error: ${error}`);
    }
  }

  render() {
    return <h1>Block number: {this.state.blockNumber}</h1>
  }
}

export default BlockNumber;
