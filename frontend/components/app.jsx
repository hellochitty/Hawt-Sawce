import React from 'react';
import NavContainer from './nav/nav_container';


const App = ({ children }) => (
  <div>
    <nav>
      <h1>HAWT SAWCE</h1>
      <NavContainer />
    </nav>
    { children }
  </div>
);

export default App;
