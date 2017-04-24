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
      comment: "",
      heat_rating: null,
      overall_rating: null,
      image_url: "",
      imageFile: null,
      imageUrl: null,
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
    this.handleUpdateFile = this.handleUpdateFile.bind(this);
    this.removeImage = this.removeImage.bind(this);
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
      comment: "",
      heat_rating: null,
      overall_rating: null,
      image_url: "",
      imageFile: null,
      imageUrl: null,
      errors: {
        overall_rating: null,
        heat_rating: null
      }
    });
  }

  handleChange(e){
    this.setState({
      comment: e.target.value,
    });
  }

  handleRatingChange(rate, text){
    this.setState({[text]: rate});
  }

  handleSubmit(){
    this.handleClose();
    let formData = new FormData();
    formData.append("checkin[comment]", this.state.comment);
    formData.append("checkin[heat_rating]", this.state.heat_rating);
    formData.append("checkin[overall_rating]", this.state.overall_rating);
    formData.append("checkin[sauce_id]", this.props.sauce.id);
    formData.append("checkin[user_id]", this.props.session.currentUser.id);
    if (this.state.imageFile){
      formData.append("checkin[image_url]", this.state.image_url);
      formData.append("checkin[image]", this.state.imageFile);
    }

    this.props.addCheckin(formData)
    .then(()=> this.props.getSauce(this.props.params.sauce_id));
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
    }
  }

  //image related handlers
  handleUpdateFile(e){
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  removeImage(){
    this.setState({ imageUrl: null, image_url: "", imageFile: null,});
  }
  render(){
    const sauce = this.props.sauce;
    let scoville_units;
    scoville_units = (sauce.scoville_units) ? (<h3>{sauce.scoville_units} Scoville (SHU)</h3>) : null;
    let checkinButton = (this.props.session.currentUser) ?
      <RaisedButton
        icon={<i className="fa fa-check-circle fa-1x" aria-hidden="true"></i>}
        label="Check-In"
        onTouchTap={this.handleOpen}/> : null;

      let editSauceButton;
      if (this.props.session.currentUser){
        editSauceButton =  (
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
            containerElement={<Link to={`/home/sauces/${sauce.id}/edit`} />}
            />
        );
      }
    //actions for modal
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

    //variables for adding image
    let addImage;
    if (this.state.image_url !== ""){
      addImage =(
        <div>
          <img className="img-upload-preview" src={this.state.image_url}/>
          <FlatButton  label="remove" onClick={this.removeImage}/>
        </div>);
    }else if (this.state.imageUrl !== null){
      addImage =(
        <div>
          <img className="img-upload-preview" src={this.state.imageUrl}/>
          <FlatButton  label="remove" onClick={this.removeImage}/>
        </div>);
    }else {
      addImage = (
        <div >
        <input type="file" id="upload-image" className="input-file" onChange={this.handleUpdateFile}/>
        <label htmlFor="upload-image" for="file">+ Image</label>
        </div>);
    }


      return(
        <div className="col-2-3">
          <div className="sauce-main">
            <div className="sauce-main-profile">
              <div className="sauce-main-profile-pic">
                <img className="sauce-thumbnail" src={sauce.image_url} />
              </div>
              <div className="sauce-main-profile-text">
                <div className="sauce-main-profile-edit">
                  <h1>{sauce.name}</h1>
                  {editSauceButton}
                </div>
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
              {checkinButton}
            </div>
          </div>
          <div className="sauce-checkins">
            <h2 id="subsection-heading">Check-Ins</h2>
            {this.props.checkins.map(checkin => (
            <CheckinIndexItem checkin={checkin} key={checkin.id}/>
            ))}
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
              <h2 className="text-center dialog-title">Check-In!</h2>
              <table className="sauce-stats">
                <tbody>
                  <tr>
                    <td><h4>Overall Rating</h4></td>
                    <td><h4>Heat Rating</h4></td>
                  </tr>
                  <tr>
                    <td>
                      <Rating
                        empty="fa fa-star-o fa-1x empty"
                        full="fa fa-star fa-1x overall-full"
                        className="overall-icon"
                        initialRate={this.state.overall_rating}
                        onChange={(rate) => this.handleRatingChange(rate, "overall_rating")}
                        />
                    </td>
                    <td>
                      <Rating
                        empty="fa fa-thermometer-empty fa-2x empty"
                        full="fa fa-thermometer-full fa-2x heat-full"
                        initialRate={this.state.heat_rating}
                        onChange={(rate) => this.handleRatingChange(rate, "heat_rating")}
                        />
                    </td>
                  </tr>
                  <tr>
                    <td><p className="custom-errors">{this.state.errors.overall_rating}</p></td>
                    <td><p className="custom-errors">{this.state.errors.heat_rating}</p></td>
                  </tr>
                </tbody>
              </table>
              <TextField
                onChange
                floatingLabelText="Description"
                value={this.state.comment}
                onChange={this.handleChange}
                fullWidth={true}
                />
                <div id="sauce-form-preview-images">
                  {addImage}
                </div>
            </form>
          </Dialog>
        </div>
      );

    }
}




export default Sauce;
