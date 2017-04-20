import React from 'react';
import { Link } from 'react-router';

const SauceIndexItem = ({sauce}) => (
  <div className='sauce-index-item'>
    <h1><Link to={`/home/sauces/${sauce.id}`}>{sauce.name}</Link></h1>
    <h2>{sauce.company}</h2>
    <h3>{sauce.scoville_units} SHU</h3>
    <h4>{sauce.description}</h4>
    <img className='sauce-thumbnail' src={sauce.image_url} />
  </div>
);

export default SauceIndexItem;
