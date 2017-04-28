import React from 'react';
import { Link } from 'react-router';
import { lodash } from 'lodash';
var Rating = require('react-rating');
import {FormattedRelative} from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import Comments from './comments';


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
    let comment;
    if (this.props.checkin.comment){
      comment = <h4 id="checkin-comment"><i>{'"'}{this.props.checkin.comment}{'"'}</i></h4>;
    }

    return(
      <div className= "checkin-main">
        <div id="sauce-form">
          <div className="checkin-view">
            <h1 className="text-center">Check-In</h1>
            <div className="checkin-details">
              <div id="flex-row">
                <div className="checkin-details-content-text">
                  <p className="inline-link" >{this.props.checkin.user}</p> got spicy with some <Link to={`/home/sauces/${this.props.checkin.sauce_id}`}>
                    <p className="inline-link" >{this.props.checkin.sauce}</p></Link>
                    {comment}
                    <table className="sauce-stats">
                      <tbody>
                        <tr>
                          <td><h4>Overall Rating</h4></td>
                          <td><h4>Heat Rating</h4></td>
                        </tr>
                        <tr>
                          <td>
                            <Rating
                              initialRate={this.props.checkin.overall_rating}
                              readonly
                              empty="fa fa-star-o fa-1x empty"
                              full="fa fa-star fa-1x overall-full"
                              className="overall-icon"
                              />
                          </td>
                          <td>
                            <Rating
                              initialRate={this.props.checkin.heat_rating}
                              readonly
                              empty="fa fa-thermometer-empty fa-2x empty"
                              full="fa fa-thermometer-full fa-2x heat-full"
                              />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="checkin-details-content-image">
                    <img className="sauce-thumbnail" src={this.props.checkin.image_url} />
                  </div>
                </div>
                <div className="checkin-index-item-footer">
                  <FormattedRelative value={time} />
                  {removalButton}
                </div>
              </div>
            </div>
          </div>
          <div className="comments">
            <Comments currentUser={this.props.session.currentUser} comments={this.props.checkin.comments}/>
          </div>
      </div>
    );
  }


}

export default Checkin;
