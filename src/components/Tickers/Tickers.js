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

  componentDidMount() {
    this.fetchCryptocurrency();
    this.interval = setInterval(() => this.fetchCryptocurrency(), 60 * 1000);
  }

  fetchCryptocurrency() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        const wanted = ['bitcoin', 'ethereum', 'litecoin'];
        const result = response.data.filter(currency => wanted.includes(currency.id));
        this.setState({ data: result });
      })
      .catch(error => console.log(error));
  }

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