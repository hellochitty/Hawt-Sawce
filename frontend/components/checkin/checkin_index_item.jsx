import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';

const CheckinIndexItem = ({checkin}) => {
  const commentary = [
    "is gettin' spicy with",
    "is turning up the heat by eating",
    "is killin' the sauce game with",
    "is having a HAWT SAWCE kind of day because of",
    "is working up a sweat by eating",
    "is gettin' a capsaicin rush from"
  ];
  let comments;
  comments = (checkin.comments) ? (<h4>{checkin.comments}</h4>) : null;
  return (
    <Link className="no-underline hover-yellow" to={`/home/checkins/${checkin.id}`}>
      <div className='sauce-index-item'>
        <div className='sauce-index-item-profile'>
          <h4>{checkin.user} { _.sample(commentary)} </h4>
          <h1>{checkin.sauce}</h1>
          <h1>{checkin.user} is gettin spicy!</h1>
          <h2>{checkin.overall_rating}</h2>
          <h2>{checkin.heat_rating}</h2>
          {comments}
        </div>
        <div className='sauce-index-item-pic'>
        </div>
      </div>
    </Link>
  );
};

export default CheckinIndexItem;
