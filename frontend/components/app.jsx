import React from 'react';
import NavContainer from './nav/nav_container';


const App = ({ children }) => (
  <div>
    <NavContainer />
    <div className="main">
      <p>youre at home</p>
      { children }
    </div>
  </div>
);

export default App;
