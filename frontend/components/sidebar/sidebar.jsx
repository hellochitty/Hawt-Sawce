import React from 'react';
import {Link} from 'react-router';

const Sidebar = (props) => {
  if (props.session.currentUser){
    return(
      <div className="profile-sidebar-container">
        <div className="profile-sidebar">
          <h1 className="text-center">{props.session.currentUser.username}</h1>

          <div className="profile-sidebar-stats">
            <Link to={`home/users/${props.session.currentUser.id}`}>
            <div className="user-sidebar-stat">
              <p className="stat-value">{props.session.currentUser.num_checkins}</p>
              <p className="stat-label">Check-Ins</p>
            </div></Link>
            <Link to={`home/users/${props.session.currentUser.id}`}>
            <div className="user-sidebar-stat">
              <p className="stat-value">{props.session.currentUser.num_sauces}</p>
              <p className="stat-label">Sauces</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="profile-sidebar-container">
        <div className="place-holder-text">
          <h2 className= "text-center">Log-In or Sign-Up</h2>
          <h3 className= "text-center">to see more!</h3>

        </div>

      </div>
    );
  }
};



export default Sidebar;
