import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';

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
      <div className="col-2-3">
        <div className="sauce-index-header">
          <div className="sauce-index-header-text">
            <h1>Checkins</h1>
            <h5>Global Checkins</h5>
          </div>
        
        </div>

        {this.props.checkins.map(checkin => (
        <CheckinIndexItem checkin={checkin} key={checkin.id}/>
        ))}
      </div>
    );
  }
}

export default withRouter(CheckinIndex);
