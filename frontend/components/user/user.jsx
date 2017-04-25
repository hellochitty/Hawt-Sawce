import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
import {FormattedRelative} from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import CheckinIndexItem from '../checkin/checkin_index_item';
import SauceIndexItem from '../sauce/sauce_index_item';


class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {active: "checkins"};
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.user_id !== newProps.params.user_id){
      this.props.getUser(newProps.params.user_id);
    }
  }

  componentDidMount(){
    this.props.getUser(this.props.params.user_id);
  }

  render(){
    let body;
    if (this.state.active === "checkins"){
      body = <div>{this.props.checkins.map(checkin => (
        <CheckinIndexItem checkin={checkin} key={checkin.id}/>
      ))}</div>;
    }else if (this.state.active === "sauces"){
      body = <div>{this.props.sauces.map(sauce => (
        <SauceIndexItem sauce={sauce} key={sauce.id}/>
      ))}</div>;
    }

    return(
      <div className= "user-profile-outer">
        <div className= "user-profile">
          <div className= "user-header">
            <div className="profile-picture">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/eb/5c/78/eb5c78657282a7c7715939aac4553dcb.jpg" />
            </div>
            <div className="profile-text">
              <h2>{this.props.user.username}</h2>
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
