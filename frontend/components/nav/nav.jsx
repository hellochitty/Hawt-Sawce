import React from 'react';
import { Link, withRouter} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  handleTouchTap(event){
   // This prevents ghost click.
   event.preventDefault();
   this.setState({
     open: true,
     anchorEl: event.currentTarget,
   });
 }

 handleRequestClose(){
   this.setState({
     open: false,
   });
 }

  render(){
    if(this.props.currentUser){
      const onLogout = () => {
        this.props.logout().then( () => this.props.router.push("/"));
    };
    const toProfile = () =>{
      this.handleRequestClose();
      this.props.router.push(`/home/users/${this.props.currentUser.id}`);
    };

      return (
        <nav>
          <div id="nav-contents">
            <div id="nav-left-links">
              <Link to="/home"><h1 id="nav-title">HAWT SAWCE</h1></Link>
              <div className="logo">
              </div>
              <div className="sub-nav-link"><Link to="/home/sauces" activeClassName="active">SAWCES</Link></div>
            </div>
            <div id="nav-links">
              <p id="nav-text">Hi, {this.props.currentUser.username}</p>
              <div className="nav-picture" onClick={this.handleTouchTap}>
                <img className="nav-picture-image" src={this.props.currentUser.image_url} />
              </div>
              <div>
                <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin= {{"horizontal":"right","vertical":"bottom"}}
                  targetOrigin= {{"horizontal":"right","vertical":"top"}}
                  onRequestClose={this.handleRequestClose}>
                  <Menu>
                    <MenuItem primaryText="My Profile" onTouchTap={toProfile} />
                    <MenuItem primaryText="Log Out" onTouchTap={onLogout} />
                  </Menu>
                </Popover>
              </div>
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
  }
}

export default withRouter(Nav);
