import React from 'react';
const SauceIndexItem = ({sauce}) => (
  <div id='sauce-index-item'>
    <h1>{sauce.name}</h1>
    <h2>{sauce.company}</h2>
    <h4>{sauce.description}</h4>
  </div>
);

export default SauceIndexItem;
