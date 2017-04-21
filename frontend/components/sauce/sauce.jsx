import React from 'react';
import Spinner from '../ui/spinner';
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
    if (sauce.name === ""){
      return (<Spinner />);
    }else{
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
                <h3>{sauce.scoville_units} SHU</h3>
                <h4>{sauce.description}</h4>
              </div>
            </div>
            <div className="sauce-main-stats">
              <table className="sauce-stats">
                <tbody>
                  <tr>
                    <td>
                      Overall
                    </td>
                    <td>
                      Heat
                    </td>
                    <td>
                      Checkins
                    </td>
                    <td>
                      Ranking
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Link to={`/home/sauces/${sauce.id}/edit`}>edit</Link>
            </div>
          </div>
          <div className="sauce-checkins">
            'Placeholder for checkins'
          </div>
        </div>
      );
    }
    }

}




export default Sauce;