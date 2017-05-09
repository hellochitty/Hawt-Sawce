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
