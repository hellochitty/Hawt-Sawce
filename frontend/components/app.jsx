import React from 'react';
import NavContainer from './nav/nav_container';


const App = ({ children }) => (
  <div>
    <NavContainer />
    { children }
  </div>
);

export default App;
