import React, { Component } from 'react';
import axios from 'axios';

import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
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
      <Cryptocurrency data={currency} key={currency.id} />
    ));

    return (
      <div>
       <ul>{currencies}</ul> 
      </div>
    )
  }
}

export default Tickers