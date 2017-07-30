import React, { Component } from 'react';
import logo from './logo.svg';
import BlockNumber from './BlockNumber';
import AddressSearch from './AddressSearch';
import Upload from './Upload';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Dapp</h2>
        </div>
        <BlockNumber />
        <AddressSearch balance="0"/>
        <Upload />
      </div>
    );
  }
}

export default App;
