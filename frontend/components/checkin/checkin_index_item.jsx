import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
var Rating = require('react-rating');


const CheckinIndexItem = ({checkin}) => {
  const commentary = [
    " is gettin' spicy with ",
    " is turning up the heat by eating ",
    " is killin' the sauce game with ",
    " is working up a sweat by eating ",
    " is gettin' a capsaicin rush from "
  ];
  let comments;
  comments = (checkin.comments) ? (<h4>{checkin.comments}</h4>) : null;
  return (

      <div className='sauce-index-item'>
        <div className='sauce-index-item-profile'>




          <h3><h2 className="inline-link" >{checkin.user}</h2>{ _.sample(commentary)}<Link to={`/home/sauces/${checkin.sauce_id}`}>
            <h2 className="inline-link" >{checkin.sauce}</h2></Link></h3>
          <h4>{`"`}<i>{checkin.comment}</i>{`"`}</h4>


          {comments}

          <table className="sauce-stats">
            <tbody>
              <tr>
                <td>
                  <Rating
                  initialRate={checkin.overall_rating}
                  readonly
                  empty="fa fa-star-o fa-1x empty"
                  full="fa fa-star fa-1x overall-full"
                  className="overall-icon-checkin"
                  />
                </td>
                <td>
                  <Rating
                  initialRate={checkin.heat_rating}
                  readonly
                  empty="fa fa-thermometer-empty fa-1x empty"
                  full="fa fa-thermometer-full fa-1x heat-full"
                  className="heat-icon-checkin"
                  />
                </td>
              </tr>
              <tr>
                <td>Overall</td>
                <td>Heat</td>
              </tr>
            </tbody>
          </table>
          <div id="flex-row">
            <h4>{checkin.updated_at}</h4>
            <Link to={`/home/checkins/${checkin.id}`}><h5 id="basic-link">View Detailed Checkin</h5></Link>
          </div>
        </div>
        <div className='sauce-index-item-pic'>

        </div>

      </div>

  );
};

export default CheckinIndexItem;
