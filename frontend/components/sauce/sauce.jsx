import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';

class Sauce extends React.Component{
  componentWillReceiveProps(newProps){
    if (this.props.params.sauce_id !== newProps.params.sauce_id){
      this.props.getSauce(newProps.params.sauce_id);
    }
  }

  componentDidMount(){
    this.props.getSauce(this.props.params.sauce_id);
  }

  render(){
    const sauce = this.props.sauce;

      return(
        <div className="col-2-3">
          <div className="sauce-main">
            <div className="sauce-main-profile">
              <div className="sauce-main-profile-pic">
                <img className="sauce-thumbnail" src={sauce.image_url} />
              </div>
              <div className="sauce-main-profile-text">
                <div className="sauce-main-profile-text-header">
                  <h1>{sauce.name}</h1>
                    <IconButton
                      tooltip="Edit Sauce"
                      className="testing"
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
                <h2>{sauce.company}</h2>
                <h3>{sauce.scoville_units} SHU</h3>
                <h4>{sauce.description}</h4>
              </div>
            </div>
            <div className="sauce-main-stats">
              <table className="sauce-stats">
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>3.5</td>
                    <td>130</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Overall</td>
                    <td>Heat</td>
                    <td>Checkins</td>
                    <td>Ranking</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sauce-main-buttons">

            </div>
          </div>
          <div className="sauce-checkins">
            'Placeholder for checkins'
          </div>
        </div>
      );

    }
}




export default Sauce;
