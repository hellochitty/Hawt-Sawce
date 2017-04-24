import React from 'react';
import NavContainer from './nav/nav_container';


const Index = ({ children }) => (
  <div>
    <NavContainer />
    <section className="index">
      <img src="https://cdn.gearpatrol.com/wp-content/uploads/2015/07/Hot-Sauce-Test-Gear-Patrol-Lead-1440.jpg" />
      <div id="test"></div>
    </section>
    { children }
  </div>
);

export default Index;
