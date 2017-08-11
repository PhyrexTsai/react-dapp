import React, { Component } from 'react';
import logo from './logo.svg';
import BlockNumber from './components/BlockNumber';
import AddressSearch from './components/AddressSearch';
import Upload from './components/Upload';
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
        <AddressSearch />
        <Upload />
      </div>
    );
  }
}

export default App;
