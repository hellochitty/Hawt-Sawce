import React from 'react';
import { Link, withRouter} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const Nav = (props) => {

  if(props.currentUser){
    const onLogout = () => {
      props.logout().then( () => props.router.push("/"));
    };

    return (
      <nav>
        <div id="nav-contents">
          <div id="nav-left-links">
            <Link to="/home"><h1 id="nav-title">HAWT SAWCE</h1></Link>
            <Link to="/home/sauces"><h2 id="nav-title">SAWCES</h2></Link>
          </div>
          <div id="nav-links">
            <p id="nav-text">Hi, {props.currentUser.username}</p>
            <RaisedButton label="Log Out" onClick={onLogout}/>
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
            <Link to="/signup" className="nav-link">SIGN UP</Link>
            <Link to="/login" className="nav-link">LOG IN</Link>
          </div>
        </div>
      </nav>
    );
  }
};

// <Link to="/signup" className="nav-link"><RaisedButton label="Sign Up" /></Link>
// <Link to="/login" className="nav-link"><RaisedButton label="Log In" /></Link>

export default withRouter(Nav);
