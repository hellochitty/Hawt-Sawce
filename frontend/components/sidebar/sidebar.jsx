import React from 'react';


const Sidebar = (props) => {
  if (props.session.currentUser){
    return(
      <div className="profile-sidebar-container">
        <div className="profile-sidebar">
          <h1 className="text-center">{props.session.currentUser.username}</h1>
          <table className="sauce-stats">
            <tbody>
              <tr>
                <td><h3>{props.session.currentUser.num_checkins}</h3></td>
                <td><h3>{props.session.currentUser.num_sauces}</h3></td>
              </tr>
              <tr>
                <td><h5>Check-Ins</h5></td>
                <td><h5>Sauces</h5></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }else{
    return (
      <div className="profile-sidebar-container">
        <h2 className= "place-holder-text">Log-In or Sign-Up</h2>
        <h2 className= "place-holder-text">to See More!</h2>
      </div>
    );
  }
};



export default Sidebar;
