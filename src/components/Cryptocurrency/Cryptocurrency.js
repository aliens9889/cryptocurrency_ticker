import React from 'react';

import './Cryptocurrency.css';


const cryptocurrency = (props) => {

  const {
    id,
    name,
    symbol,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = props.data;

  return (
    <li key={id}>
      <p>{name} ({symbol})</p>
      <h1>${price_usd}</h1>
      <p>{percent_change_1h}% 1h</p>
      <p>{percent_change_24h}% 24h</p>
      <p>{percent_change_7d}% 7d</p>
    </li>
  );
}


export default cryptocurrency;