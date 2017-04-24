import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
var Rating = require('react-rating');
import {FormattedRelative} from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';


class Checkin extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(newProps){
    if (this.props.params.checkin_id !== newProps.params.checkin_id){
      this.props.getCheckin(newProps.params.checkin_id);
    }
  }

  componentDidMount(){
    this.props.getCheckin(this.props.params.checkin_id);
  }

  handleClick(){
    this.props.removeCheckin(this.props.params.checkin_id)
    .then(()=> this.props.router.push("/home"));
  }

  render(){

    var intlData = {
      "locales": "en-US"
    };
    let time = this.props.checkin.updated_at || "12-12-2016";


    let removalButton = (this.props.session.currentUser.username === this.props.checkin.user) ?
      <RaisedButton
        icon={<i className="fa fa-minus-circle" aria-hidden="true"></i>}
        label="Delete"
        onTouchTap={this.handleClick}
        /> : null;

    return(
      <div id="sauce-form">
        <div className="checkin-view">
          <h1 className="text-center">Check-In</h1>
          <h1>{this.props.checkin.comment}</h1>
          <h1>{this.props.checkin.user}</h1>
          <Rating
            initialRate={this.props.checkin.overall_rating}
            readonly
            empty="fa fa-star-o fa-1x empty"
            full="fa fa-star fa-1x overall-full"
            className="overall-icon"
            />
          <Rating
            initialRate={this.props.checkin.heat_rating}
            readonly
            empty="fa fa-thermometer-empty fa-2x empty"
            full="fa fa-thermometer-full fa-2x heat-full"
            />
          <FormattedRelative value={time} />
          <Link to={`/home/sauces/${this.props.checkin.sauce_id}`}><h2 className="inline-link" >{this.props.checkin.sauce}</h2></Link>
          <img className="sauce-thumbnail" src={this.props.checkin.image_url} />
          {removalButton}
        </div>
      </div>
    );
  }


}

export default Checkin;
