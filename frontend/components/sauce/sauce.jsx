import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
var Rating = require('react-rating');
import CheckinIndexItem from '../checkin/checkin_index_item';
import {FormattedDate} from 'react-intl';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {merge} from 'lodash';


class Sauce extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      description: "",
      heat_rating: null,
      overall_rating: null,
      errors: {
        overall_rating: null,
        heat_rating: null
      }
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmitAttempt = this.handleSubmitAttempt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.sauce_id !== newProps.params.sauce_id){
      this.props.getSauce(newProps.params.sauce_id);
    }
  }

  componentDidMount(){
    this.props.getSauce(this.props.params.sauce_id);
    this.props.getCheckins();
  }
  //for modal
  handleOpen(){
    this.setState({open: true});
  }

  handleClose(){
    this.setState({
      open: false,
      description: "",
      heat_rating: null,
      overall_rating: null,
      errors: {
        overall_rating: null,
        heat_rating: null
      }
    });
  }

  handleChange(e){
    this.setState({
      description: e.target.value,
    });
  }

  handleRatingChange(rate, text){
    this.setState({[text]: rate});
  }

  handleSubmit(){
    const checkin = {};
    checkin["description"] = this.state.description;
    checkin["heat_rating"] = this.state.heat_rating;
    checkin["overall_rating"] = this.state.overall_rating;
    checkin["sauce_id"] = this.props.sauce.id;
    checkin["user_id"] = this.props.session.currentUser.id;
    console.log(checkin);
  }

  handleSubmitAttempt(){
    if (this.state.heat_rating === null && this.state.overall_rating === null ){
      this.setState({errors:
        {
          heat_rating: "please provide a heat rating!",
          overall_rating: "please provide an overall rating!"
        }
      });
    }else if (this.state.heat_rating === null){
      this.setState({errors: {heat_rating: "please provide a heat rating!"}});
    }else if (this.state.overall_rating === null){
      this.setState({errors: {overall_rating: "please provide an overall rating!"}});
    }else{
      this.handleSubmit();
      this.handleClose();
    }
  }

  render(){
    const sauce = this.props.sauce;
    let scoville_units;
    scoville_units = (sauce.scoville_units) ? (<h3>{sauce.scoville_units} Scoville (SHU)</h3>) : null;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmitAttempt}
      />,
    ];
      return(
        <div className="col-2-3">
          <div className="sauce-main">
            <div className="sauce-main-profile">
              <div className="sauce-main-profile-pic">
                <img className="sauce-thumbnail" src={sauce.image_url} />
              </div>
              <div className="sauce-main-profile-text">
                <h1>{sauce.name}</h1>
                <h2>{sauce.company}</h2>
                {scoville_units}
                <h4>{sauce.description}</h4>
              </div>
            </div>
            <div className="sauce-main-stats">
              <table className="sauce-stats">
                <tbody>
                  <tr>
                    <td>
                      <Rating
                      initialRate={sauce.average_overall}
                      readonly
                      empty="fa fa-star-o fa-1x empty"
                      full="fa fa-star fa-1x overall-full"
                      className="overall-icon"
                      />
                    </td>
                    <td>
                      <Rating
                      initialRate={sauce.average_heat}
                      readonly
                      empty="fa fa-thermometer-empty fa-2x empty"
                      full="fa fa-thermometer-full fa-2x heat-full"
                      />
                    </td>
                    <td><h3>{sauce.total_reviews}</h3></td>
                    <td><h3><FormattedDate value={sauce.created_at}/></h3></td>
                  </tr>
                  <tr>
                    <td><h5>Overall</h5></td>
                    <td><h5>Heat</h5></td>
                    <td><h5>Check-Ins</h5></td>
                    <td><h5>Added On</h5></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sauce-main-buttons">
              <IconButton
                tooltip="Edit Sauce"
                className="edit-icon"
                iconClassName="fa fa-pencil fa-2x"
                touch={true}
                tooltipPosition="bottom-center"
                iconStyle={{
                  width: 20,
                  height: 20
                }}
                style={{
                  width: 25,
                  height: 25,
                  padding: 0
                }}
                containerElement={<Link to={`/home/sauces/${sauce.id}/edit`} />}
                />
              <FlatButton  label="Check-In" onTouchTap={this.handleOpen}/>
            </div>
          </div>
          <div className="sauce-checkins">
            <h2 id="subsection-heading">Check-Ins</h2>
            {this.props.checkins.map(checkin => (
            <CheckinIndexItem checkin={checkin} key={checkin.id}/>
            ))}
          </div>
          <Dialog
            title="Add Checkin"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            <form>
              <Rating
                empty="fa fa-star-o fa-1x empty"
                full="fa fa-star fa-1x overall-full"
                className="overall-icon"
                initialRate={this.state.overall_rating}
                onChange={(rate) => this.handleRatingChange(rate, "overall_rating")}
                />
              <p className="custom-errors">{this.state.errors.overall_rating}</p>
              <br />
              <Rating
                empty="fa fa-thermometer-empty fa-2x empty"
                full="fa fa-thermometer-full fa-2x heat-full"
                initialRate={this.state.heat_rating}
                onChange={(rate) => this.handleRatingChange(rate, "heat_rating")}
                />
              <p className="custom-errors">{this.state.errors.heat_rating}</p>
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




export default Sauce;
