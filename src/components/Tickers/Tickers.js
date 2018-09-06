import React, { Component } from 'react';
import axios from 'axios';

import './Tickers.css';

class Tickers extends Component {

  state = {
    data: [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        price_usd: '1',
        percent_change_1h: '0',
        percent_change_24h: '0',
        percent_change_7d: '0'
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        price_usd: '1',
        percent_change_1h: '0',
        percent_change_24h: '0',
        percent_change_7d: '0'
      },
      {
        id: 'litecoin',
        name: 'Litecoin',
        symbol: 'LTC',
        price_usd: '1',
        percent_change_1h: '0',
        percent_change_24h: '0',
        percent_change_7d: '0'
      },
    ]
  };

  render () {

    const currencies = this.state.data.map(currency => (
      <li key={currency.id}>
        <h2>{currency.name} ({currency.symbol})</h2>
        <p>{currency.price_usd}</p>
        <p>{currency.percent_change_1h}%</p>
        <p>{currency.percent_change_24h}%</p>
        <p>{currency.percent_change_7d}%</p>
      </li>
    ));

    return (
      <div>
       <ul>{currencies}</ul> 
      </div>
    )
  }
}

export default Tickers