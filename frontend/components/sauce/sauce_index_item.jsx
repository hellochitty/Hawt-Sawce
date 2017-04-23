import React from 'react';
import { Link } from 'react-router';
var Rating = require('react-rating');
import {FormattedDate} from 'react-intl';

const SauceIndexItem = ({sauce}) => {
  let scoville_units;
  scoville_units = (sauce.scoville_units) ? (<h3>{sauce.scoville_units} Scoville (SHU)</h3>) : null;
  return (
    <Link className="no-underline hover-yellow" to={`/home/sauces/${sauce.id}`}>

      <div className='sauce-index-item'>
        <div className='sauce-index-item-main'>
          <div className='sauce-index-item-profile'>
            <h1>{sauce.name}</h1>
            <h2>{sauce.company}</h2>
            {scoville_units}
          </div>
          <div className='sauce-index-item-pic'>
            <img className='sauce-thumbnail' src={sauce.image_url} />
          </div>
        </div>
        <div className='sauce-index-item-stats'>
          <table className="sauce-stats">
            <tbody>
              <tr>
                <td>
                  <Rating
                  initialRate={sauce.average_overall}
                  readonly
                  empty="fa fa-star-o fa-1x empty"
                  full="fa fa-star fa-1x overall-full"
                  className="overall-icon"
                  />
                </td>
                <td>
                  <Rating
                  initialRate={sauce.average_heat}
                  readonly
                  empty="fa fa-thermometer-empty fa-2x empty"
                  full="fa fa-thermometer-full fa-2x heat-full"
                  />
                </td>
                <td><h3>{sauce.total_reviews}</h3></td>
                <td><h3><FormattedDate value={sauce.created_at}/></h3></td>
              </tr>
              <tr>
                <td><h5>Overall</h5></td>
                <td><h5>Heat</h5></td>
                <td><h5>Checkins</h5></td>
                <td><h5>Added On</h5></td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

    </Link>
  );
};

export default SauceIndexItem;
