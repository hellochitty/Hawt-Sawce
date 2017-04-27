import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class CheckinIndex extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount(){
    this.props.getCheckins();
  }

  redirect(){
    this.props.router.push("/home/sauces/new");
  }

  render(){
    return(
      <div className="main">
        <div className="col-2-3">
          <div className="sauce-index-header">
            <div className="sauce-index-header-text">
              <h1>Check-Ins</h1>
              <h3>Global Check-Ins</h3>
            </div>
          </div>
          {this.props.checkins.map(checkin => (
            <CheckinIndexItem checkin={checkin} key={checkin.id}/>
          ))}
        </div>
        <div className="col-1-3">
          <SidebarContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(CheckinIndex);
