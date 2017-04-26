import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
import {FormattedDate} from 'react-intl';
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
      description: "",
      editMode: false,
      image_url: "",
      imageFile: null,
      imageUrl: null
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleTabSwitch = this.handleTabSwitch.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.user_id !== newProps.params.user_id){
      this.props.getUser(newProps.params.user_id);
    }else{
      if (newProps.user.description){
        this.setState({description: newProps.user.description});
      }
    }
  }

  componentDidMount(){
    this.props.getUser(this.props.params.user_id);
  }

  handleChange(e){
    console.log(this.state.description);
    this.setState({
      description: e.currentTarget.value,
    });
    console.log(this.state.description);
  }

  handleTabSwitch(text){
    if (text === "checkins"){
      this.setState({activeTab: "checkins"});
    }else if (text === "sauces"){
      this.setState({activeTab: "sauces"});
    }
  }

  handleEditClick(){
    this.setState({editMode: true});
  }

  handleCloseClick(){
    this.setState({editMode: false, description: this.props.user.description});
  }

  handleSubmitClick(){
    const user = {};
    user["id"] = this.props.params.user_id;
    user["description"] = this.state.description;
    this.props.updateUser(user);
    this.handleCloseClick();
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




    let description;
      if (this.props.currentUser){
        if(this.props.currentUser.id === this.props.user.id){
          if(this.state.editMode){
            description =
              <div>
                <input className="description-input" type="text" value={this.state.description} onChange={this.handleChange}/>
                <p className="inline-link-small" onClick={this.handleSubmitClick}><i className="fa fa-plus link-image" aria-hidden="true"></i></p>
                <p className="inline-link-small" onClick={this.handleCloseClick}><i className="fa  fa-times link-image" aria-hidden="true"></i></p>
              </div>;
          }else{
            //update to this.state.description
            description =
              <div>
                {this.state.description}
                <p className="inline-link-small" onClick={this.handleEditClick}><i className="fa fa-pencil link-image" aria-hidden="true"></i></p>
              </div>;
          }
        }else{
          description = <div>{this.state.description}</div>;
        }
      }else{
        description = <div>{this.state.description}</div>;
      }

    return(
      <div className= "user-profile-outer">

        <div className= "user-profile-background">
          <div className="profile-picture">
            <img src={this.props.user.image_url} />
          </div>
          <div className= "user-profile">
            <div className= "user-header">
              <div className="profile-text">

                <h2>{this.props.user.username}</h2>
                {description}
                  <div className="user-profile-stats">
                    <div className="user-profile-stat stat-button" onClick={() => this.handleTabSwitch("checkins")}>
                      <p className="stat-value">{this.props.user.num_checkins}</p>
                      <p className="stat-label">Check-Ins</p>
                    </div>
                    <div className="user-profile-stat stat-button" onClick={() => this.handleTabSwitch("sauces")}>
                      <p className="stat-value">{this.props.user.num_sauces}</p>
                      <p className="stat-label">Sauces</p>
                    </div>
                    <div className="user-profile-stat">
                      <p className="stat-value">100</p>
                      <p className="stat-label">Bookmarks</p>
                    </div>
                    <div className="user-profile-stat">
                      <p className="stat-value"><FormattedDate   value={this.props.user.join_date}/></p>
                      <p className="stat-label">Saucy Since</p>
                    </div>
                  </div>
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

      </div>
    );
  }


}

export default User;
