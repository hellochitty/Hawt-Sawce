import React from 'react';


const Sidebar = (props) => (
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


export default Sidebar;
