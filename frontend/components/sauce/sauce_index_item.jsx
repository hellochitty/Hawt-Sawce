import React from 'react';
import { Link } from 'react-router';

const SauceIndexItem = ({sauce}) => {
  let scoville_units;
  scoville_units = (sauce.scoville_units) ? (<h3>{sauce.scoville_units} Scoville (SHU)</h3>) : null;
  return (
    <Link className="no-underline hover-yellow" to={`/home/sauces/${sauce.id}`}>
      <div className='sauce-index-item'>
        <div className='sauce-index-item-profile'>
          <h1>{sauce.name}</h1>
          <h2>{sauce.company}</h2>
          {scoville_units}
          <h3>rating placeholder</h3>
        </div>
        <div className='sauce-index-item-pic'>
          <img className='sauce-thumbnail' src={sauce.image_url} />
        </div>
      </div>
    </Link>
  );
};

export default SauceIndexItem;
