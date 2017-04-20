import React from 'react';
import { Link } from 'react-router';

const SauceIndexItem = ({sauce}) => (
  <div className='sauce-index-item'>
    <div className='sauce-index-item-profile'>
      <h1><Link to={`/home/sauces/${sauce.id}`}>{sauce.name}</Link></h1>
      <h2>{sauce.company}</h2>
      <h3>{sauce.scoville_units} SHU</h3>
      <h3>rating placeholder</h3>
    </div>
    <div className='sauce-index-item-pic'>
      <img className='sauce-thumbnail' src={sauce.image_url} />
    </div>
  </div>
);

export default SauceIndexItem;
