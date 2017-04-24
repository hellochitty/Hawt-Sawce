import React from 'react';
import NavContainer from './nav/nav_container';


const Index = ({ children }) => (
  <div>
    <NavContainer />
    <section className="index">
      <p>SLASH PAGE</p>
      <img src="" />
    </section>
    { children }
  </div>
);

export default Index;
