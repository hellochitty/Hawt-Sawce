import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
var Rating = require('react-rating');
import CheckinIndexItem from '../checkin/checkin_index_item';
import {FormattedDate} from 'react-intl';

class Sauce extends React.Component{
  componentWillReceiveProps(newProps){
    if (this.props.params.sauce_id !== newProps.params.sauce_id){
      this.props.getSauce(newProps.params.sauce_id);
    }
  }

  componentDidMount(){
    this.props.getSauce(this.props.params.sauce_id);
    this.props.getCheckins();
  }

  render(){
    const sauce = this.props.sauce;
    let scoville_units;
    scoville_units = (sauce.scoville_units) ? (<h3>{sauce.scoville_units} Scoville (SHU)</h3>) : null;

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
                    <td><h1>{sauce.total_reviews}</h1></td>
                    <td><h3><FormattedDate value={sauce.created_at}/></h3></td>
                  </tr>
                  <tr>
                    <td><h5>Overall</h5></td>
                    <td><h5>Heat</h5></td>
                    <td><h5>Checkins</h5></td>
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
            </div>
          </div>
          <div className="sauce-checkins">
            <h2 id="subsection-heading">Checkins</h2>
            {this.props.checkins.map(checkin => (
            <CheckinIndexItem checkin={checkin} key={checkin.id}/>
            ))}
          </div>
        </div>
      );

    }
}




export default Sauce;
