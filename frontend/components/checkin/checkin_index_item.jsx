import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
var Rating = require('react-rating');
import {FormattedRelative} from 'react-intl';


const CheckinIndexItem = ({checkin}) => {

  const commentary = [
    " is gettin' spicy with ",
    " is turning up the heat by eating ",
    " is killin' the sauce game with ",
    " is working up a sweat by eating ",
    " is gettin' a capsaicin rush from "
  ];
  let comment;
  comment = (checkin.comment) ? (<h3>{`" `}<i>{checkin.comment}</i>{` "`}</h3>) : null;

  var intlData = {
    "locales": "en-US"
  };
  let time = checkin.updated_at;

  return (
    <div className='checkin-index-item-outer'>
      <div className='checkin-index-item'>

        <div className='checkin-index-item-content'>
          <div className='checkin-index-item-profile'>
            <div className='checkin-index-item-profile-header'>

              <div className="checkin-user-picture">
                <Link to={`/home/users/${checkin.user_id}`}>
                  <img className="checkin-user-image" src={checkin.user_image_url} />
                </Link>
              </div>

              <div className='checkin-index-item-profile-text'>
                <Link to={`/home/users/${checkin.user_id}`}>
                  <p className="inline-link-checkin">
                    {checkin.user}
                  </p>
                </Link>
                <h4 id="filler-text">got spicy with some</h4>
                <Link to={`/home/sauces/${checkin.sauce_id}`}>
                  <p className="inline-link-checkin" >
                    {checkin.sauce}
                  </p>
                </Link>
              </div>

            </div>

            <table className="checkin-stats">
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
            {comment}
          </div>
        </div>


        <div className='checkin-index-item-footer'>
          <FormattedRelative value={time} />
          <Link to={`/home/checkins/${checkin.id}`}><h5 id="basic-link">View Detailed Check-In</h5></Link>
        </div>
      </div>
    </div>


  );
};

export default CheckinIndexItem;
