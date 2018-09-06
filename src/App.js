import React, { Component } from 'react';

import Tickers from './components/Tickers/Tickers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Cryptocurrency Ticker</h2>
        </header>
        <Tickers />
      </div>
    );
  }
}

export default App;
