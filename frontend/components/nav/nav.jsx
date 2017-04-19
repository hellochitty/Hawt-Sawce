import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
const Nav = (props) => {
  if(props.currentUser){
    return (
      <div>
        <h3>Welcome, {props.currentUser.username}</h3>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  }else{
    return (
      <div>
        <Link to="/signup"><RaisedButton label="Sign Up"/></Link>
        <Link to="/login"><RaisedButton label="Log In"/></Link>
      </div>
    );
  }
};


export default Nav;
