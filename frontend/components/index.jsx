import React from 'react';
import NavContainer from './nav/nav_container';
import {Link} from 'react-router';

const Index = ({ children }) => (
  <div>
    <div id="index-nav-contents">
        <Link to="/signup" className="nav-link">SIGN UP</Link>
        <Link to="/login" className="nav-link">LOG IN</Link>
    </div>
    <section className="index">



      <div id="index-text">
        <p id="index-text-title">HAWT SAWCE</p>
        <p id="index-text-subtitle">ENTHUSIASTS ONLY</p>

        <p id="index-text-subtitle"></p>
      </div>

      <div className="index-background">
        <div className="index-background-color">

        </div>
      </div>
    </section>

  </div>
);

export default Index;

// <img src="https://s-media-cache-ak0.pinimg.com/originals/e4/95/6a/e4956a43d6c53f6fce6780dd7da739f8.png" />
