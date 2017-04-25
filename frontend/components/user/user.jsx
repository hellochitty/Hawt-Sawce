import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
import {FormattedRelative} from 'react-intl';
//material-ui components
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
//internal components
import CheckinIndexItem from '../checkin/checkin_index_item';
import SauceIndexItem from '../sauce/sauce_index_item';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: "checkins",
      open: false,
      description: this.props.description,
      image_url: "",
      imageFile: null,
      imageUrl: null
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.user_id !== newProps.params.user_id){
      this.props.getUser(newProps.params.user_id);
    }
  }

  componentDidMount(){
    this.props.getUser(this.props.params.user_id);
  }

  //for modal
  handleOpen(){
    this.setState({open: true});
  }
  handleClose(){
    this.setState({
      open: false,
      description: this.props.description,
      image_url: "",
      imageFile: null,
      imageUrl: null
    });
  }

  handleChange(e){
    this.setState({
      description: e.target.value,
    });
  }

  render(){
    let body;
    if (this.state.activeTab === "checkins"){
      body = <div>{this.props.checkins.map(checkin => (
        <CheckinIndexItem checkin={checkin} key={checkin.id}/>
      ))}</div>;
    }else if (this.state.activeTab === "sauces"){
      body = <div>{this.props.sauces.map(sauce => (
        <SauceIndexItem sauce={sauce} key={sauce.id}/>
      ))}</div>;
    }


    //actions for modal
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Update"
        primary={true}
        keyboardFocused={true}

      />,
    ];



    let editButton;
      if (this.props.currentUser){
        editButton = (this.props.currentUser.id === this.props.user.id) ?
        <IconButton
          className="edit-icon"
          iconClassName="fa fa-pencil fa-3x"
          touch={true}
          iconStyle={{
            width: 20,
            height: 20
          }}
          style={{
            width: 25,
            height: 25,
            padding: 0
          }}
          onClick={this.handleOpen}
          /> : null;
      }

    return(
      <div className= "user-profile-outer">
          <div className= "user-profile-background">
            <div className="profile-picture">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/eb/5c/78/eb5c78657282a7c7715939aac4553dcb.jpg" />
            </div>
            <div className= "user-profile">
            <div className= "user-header">
              <div className="profile-text">
                <h2>{this.props.user.username}</h2>
                <p>placeholder for description</p>
                {editButton}
              </div>
            </div>
        </div>

        </div>
        <div className="user-profile-body">
          <div className="body-2-3">
            {body}
          </div>
          <div className="body-1-3">
            side section stuff
          </div>
        </div>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{
            width: '400px',
            maxWidth: 'none',
          }}
          >
          <form>
            <h2 className="text-center dialog-title">Update your profile!</h2>
            <TextField
              onChange
              floatingLabelText="Description"
              value={this.state.description}
              onChange={this.handleChange}
              fullWidth={true}
              />
          </form>
        </Dialog>

      </div>
    );
  }


}

export default User;
