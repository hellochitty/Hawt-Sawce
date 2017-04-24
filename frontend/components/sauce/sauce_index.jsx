import React from 'react';
import SauceIndexItem from './sauce_index_item';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';

class SauceIndex extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount(){
    this.props.getSauces();
  }


  redirect(){
    this.props.router.push("/home/sauces/new");
  }

  render(){
    let addSauceButton;
    if (this.props.session.currentUser){
      addSauceButton =  (
        <div id="add-sauce-button">
          <RaisedButton onClick={this.redirect}  label="+ Sauce"/>
        </div>
      );
    }


    return(
      <div className="main">
        <div className="col-2-3">
          <div className="sauce-index-header">
            <div className="sauce-index-header-text">
              <h1>Sauces</h1>
              <h5>Check out our sauces!</h5>
            </div>
            {addSauceButton}
          </div>

          {this.props.sauces.map(sauce => (
            <SauceIndexItem sauce={sauce} key={sauce.id}/>
          ))}
        </div>
        <div className="col-1-3">
          <SidebarContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(SauceIndex);
