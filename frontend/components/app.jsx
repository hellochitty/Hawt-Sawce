import React from 'react';
import NavContainer from './nav/nav_container';



const App = ({ children }) => (
  <div>
    <NavContainer />
    <div className="main">
      { children }
    </div>
  </div>
);

export default App;

// import SidebarContainer from './sidebar/sidebar_container';
// <div className="col-1-3">
//   <SidebarContainer />
// </div>
