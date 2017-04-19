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
          <h1 id="nav-title">HAWT SAWCE</h1>
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
            <Link to="/signup" className="nav-link"><RaisedButton label="Sign Up" /></Link>
            <Link to="/login" className="nav-link"><RaisedButton label="Log In" /></Link>
          </div>
        </div>
      </nav>
    );
  }
};


export default withRouter(Nav);
