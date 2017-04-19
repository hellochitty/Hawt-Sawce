import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
const Nav = (props) => {


  if(props.currentUser){
    return (
      <nav>
        <div id="nav-contents">
          <h1 id="nav-title">HAWT SAWCE</h1>
          <div id="nav-links">
            <p id="nav-text">Hi, {props.currentUser.username}</p>
            <RaisedButton label="Log Out" onClick={props.logout}/>
          </div>
        </div>
      </nav>
    );
  }else{
    return (
      <nav>
        <div id="nav-contents">
          <h1 id="nav-title">HAWT SAWCE</h1>
          <div id="nav-links">
            <Link to="/signup" className="nav-link"><RaisedButton label="Sign Up" /></Link>
            <Link to="/login" className="nav-link"><RaisedButton label="Log In" /></Link>
          </div>
        </div>
      </nav>
    );
  }
};


export default Nav;
