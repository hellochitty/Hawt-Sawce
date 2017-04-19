import React from 'react';
import NavContainer from './nav/nav_container';


const Index = ({ children }) => (
  <div>
    <nav>
        <NavContainer />
        <section class="index">
          <p>SLASH PAGE</p>
        </section>

    </nav>
    { children }
  </div>
);

export default Index;
