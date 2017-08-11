import React, { Component } from 'react';
import EthUtil from 'ethereumjs-util';
import AddressBalance from './AddressBalance';
import PropTypes from 'prop-types';
import {getAddressBalanceLoad} from './lib/dAppService';

class AddressSearch extends Component {
  state = {
    address: '0x7c20badacd20f09f972013008b5e5dae82670c8d',
    balance: '0'
  };

  componentDidMount() {
    this.handleAddressBalanceLoad();
  }

  handleAddressBalanceLoad = async () => {
    try {
      const res = await getAddressBalanceLoad(this.state.address);
      console.log(`handleAddressBalanceLoad res: ${JSON.stringify(res)}`);
      const balance = res.result//EthUtil.toBuffer(result.result)
      this.setState({ balance });
    } catch (error) {
      console.error(`getAddressBalanceLoad error: ${error} `);
      this.setState({ balance: error });
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({address: e.target.value});
  }
      
  handleClick = (e) => {
    e.preventDefault();
    this.handleAddressBalanceLoad();
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

export default AddressSearch;
