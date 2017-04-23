import React from 'react';
import NavContainer from './nav/nav_container';
import SidebarContainer from './sidebar/sidebar_container';


const App = ({ children }) => (
  <div>
    <NavContainer />
    <div className="main">
      { children }
      <div className="col-1-3">
        <SidebarContainer />
      </div>
    </div>
  </div>
);

export default App;
